import React, { useState,useEffect} from "react";
import InfoComponent from "../components/InfoComponent/InfoComponent";
import SearchBar from '../components/SearchBar/SearchBarComponent'
import ShareComponent from '../components/ShareComponent/ShareComponent'
import { useRouter } from 'next/router'
import Head from 'next/head'





const SpotifyWordCloud = () => {
    const [playlist, setPlaylist] = useState('');
    const [frequentWord, setFrequentWord] = useState({});
    const [placeholder,setPlaceholder] = useState("Search for a playlist or introduce playlist ID (with less than 150 songs)")
    const [readOnly,setReadOnly] = useState(true)
    const [token, setToken] = useState('');
    const [error, setError] = useState('');
    const [modalOptions, setModalOptions] = useState({});
    const [finished, setFinished] = useState(false);
    const router = useRouter();

    const getPlaylist = async (playlistId) => {
        const cleaned_url = playlistId.substring(query.lastIndexOf('/') + 1)
        const deepSearch = await fetch("https://api.spotify.com/v1/playlists/"+cleaned_url, {
                headers: {
                Authorization: "Bearer "+token,
                "Content-Type": "application/json"
                     }
                })
        const deepData = await deepSearch.json()
       
        if(deepData && !deepData.error){
            return [deepData];     
        }
        return []
    }
    // Search bar handlers
    const handleFilter = async (searchWord) => {
        const searchPlaylist = async (query) => {
            const res = await fetch("https://api.spotify.com/v1/search?type=playlist&q="+query, {
                        headers: {
                        Authorization: "Bearer "+token,
                        "Content-Type": "application/json"
                             }
                        })
            const data = await res.json()
            if(data && !data.error && data.playlists && data.playlists.items.length > 0 ){
                return data['playlists']['items'];     
            }
               // If there is no data we try to search the id
            return getPlaylist(query)
        }
        
        if (searchWord.length > 3){
            var  data = await searchPlaylist(searchWord);
            data = data.filter((x) => x['tracks']['total'] < 150);
            return data
        }
            return;
    };

    const clearInputHandler = (event) => {
        setPlaylist(event.target.getAttribute("data-value"))
        setPlaceholder(event.target.getAttribute("data-title"))
    }

    async function fetchPlaylist(playlistID) {
        try{
            setError('')
            setFinished(false)
            document.getElementById('my_dataviz').style.display = "none"
            document.getElementById("loading").style.display = "flex";
            const response = await fetch("https://zamar-projects.ddns.net/playlist/" + playlistID);
            const myWords = await response.json();

            //Save the data for later use
            setFrequentWord({"word":myWords[0][0],"times":myWords[0][1]})
            const WordCloud =(await import('wordcloud')).default
            const colorFunction = function (word, weight) {
                return (weight > 50) ? '#1DB954' : 'black';
              };
            const hoverFunction = function(item,dimension,event){
                if (item){
                    setModalOptions({x:event['pageX'],y:event['pageY'],word:item[0],frequency:item[1]})
                }
                else {
                    setModalOptions({})
                }
            }
            document.getElementById("loading").style.display = "flex";
            document.getElementById('my_dataviz').style.display = "block"
            WordCloud(document.getElementById('my_dataviz'), { list: myWords,color:colorFunction,hover:hoverFunction } );
            document.getElementById("loading").style.display = "none";

            setFinished(true)
        }
        catch(error){
            setError("Couldn't find playlist,try another one.")
            document.getElementById("loading").style.display = "none";
        }
     
    }
    // In case a playlist is given by parameter.
    useEffect(() => {
        if(!router.isReady) return;
        const query = router.query;
        if (Object.keys(query).length > 0 && query.playlist){
            fetchPlaylist(query.playlist);
            setPlaceholder(query.title)
        }
        
      }, [router.isReady, router.query]);

    useEffect(() => {
        if (playlist){
            document.getElementById("my_dataviz").innerHTML = "";
            fetchPlaylist(playlist);
        }
    },[playlist]) // <-- here put the parameter to listen.

    useEffect(() => {
        (async ()=>{
            document.body.style.backgroundColor = "#1DB954";
            if (!token) {
                const res = await fetch(`https://zamar-projects.ddns.net/anonymous-token`)
                const data = await res.json()
                setToken(data['accessToken'])
                setReadOnly(false)
            }
        })()
    },[]) 

    return (<>
    <Head>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content="Spotify WordCloud by Zamar" />
      <meta
        name="twitter:description"
        content="Get the most frequent words of any spotify playlist!"
      />
      <meta name="twitter:creator" content="@ZamaRroura" />
      <meta
        name="twitter:image"
        content="https://twitter.com/ZamarRoura/photo"
      />
      <meta property="og:title" content="Spotify Worcloud by Zamar" />
      <meta property="og:url" content="https://spotifycloud.zamar-roura.com" />
      <meta property="og:image" content="https://spotifycloud.zamar-roura.com/images/thumbnail.png" />
      <meta
        property="og:description"
        content="Get the most frequent words of any spotify playlist!"
      />
      <meta property="og:site_name" content="Zamar Roura" /> 

      <meta name="theme-color" content="#ffffff" />
    </Head>
        <div className='container'>
            <h2>Find the most frequent words in the playlist lyrics</h2> 
            {error && <h4>{error}</h4>}
            <SearchBar playlist={playlist} searchFunction={handleFilter} clearInputHandler={clearInputHandler} placeholder={placeholder} readOnly={readOnly}/>
            {finished && <div id ="share"><ShareComponent  url={"https://"+ document.location.hostname +  "?playlist="+playlist+"&title=" + encodeURIComponent(placeholder)} text={" The word '" + frequentWord.word + "' appears " + frequentWord.times +" times in '" + placeholder + "' playlist of Spotify. Click to know more!"} title="Spotify Wordcloud"></ShareComponent></div>}
                <div id ="loading" className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <div id="my_dataviz"></div>
            {Object.keys(modalOptions).length > 0 && <InfoComponent modalOptions={modalOptions}></InfoComponent>}
        </div>

        <style jsx>{`
        
        #share {
            display:flex !important;
            justify-content:center;
            justify-items:center;
            text-align:center;
            margin: 20px 0;
        }
        h4 {
            text-align:center;
            color:white;
        }
        h2 {
            text-align:center;
        }
        .container{
            margin:50px auto;
            max-width: 1050px;
            padding: 5px;
        }

  
        #my_dataviz {
            width:100%;
            height: 900px;
           
        }
        .lds-roller {
            display: none;
            align-items:center;
            justify-content:center;
            justify-items:center;
            position:relative;
        }
        .lds-roller div {
            animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            transform-origin: 40px 40px;
        }
        .lds-roller div:after {
            content: " ";
            display: block;
            position: absolute;
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: white;
            margin: -4px 0 0 -4px;
        }
        .lds-roller div:nth-child(1) {
            animation-delay: -0.036s;
        }
        .lds-roller div:nth-child(1):after {
            top: 63px;
            left: 63px;
        }
        .lds-roller div:nth-child(2) {
            animation-delay: -0.072s;
        }
        .lds-roller div:nth-child(2):after {
            top: 68px;
            left: 56px;
        }
        .lds-roller div:nth-child(3) {
            animation-delay: -0.108s;
        }
        .lds-roller div:nth-child(3):after {
            top: 71px;
            left: 48px;
        }
        .lds-roller div:nth-child(4) {
            animation-delay: -0.144s;
        }
        .lds-roller div:nth-child(4):after {
            top: 72px;
            left: 40px;
        }
        .lds-roller div:nth-child(5) {
            animation-delay: -0.18s;
        }
        .lds-roller div:nth-child(5):after {
            top: 71px;
            left: 32px;
        }
        .lds-roller div:nth-child(6) {
            animation-delay: -0.216s;
        }
        .lds-roller div:nth-child(6):after {
            top: 68px;
            left: 24px;
        }
        .lds-roller div:nth-child(7) {
            animation-delay: -0.252s;
        }
        .lds-roller div:nth-child(7):after {
            top: 63px;
            left: 17px;
        }
        .lds-roller div:nth-child(8) {
            animation-delay: -0.288s;
        }
        .lds-roller div:nth-child(8):after {
            top: 56px;
            left: 12px;
        }
        @keyframes lds-roller {
            0% {
            transform: rotate(0deg);
            }
            100% {
            transform: rotate(360deg);
            }
        }
        
        `}</style>
            </>
            );
}
SpotifyWordCloud.propTypes = {};

SpotifyWordCloud.defaultProps = {};

export default SpotifyWordCloud;
