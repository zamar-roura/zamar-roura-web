import React, { useState,useEffect} from "react";
import InfoComponent from "../components/InfoComponent/InfoComponent";
// import InfoComponent from "../components/InfoComponent/InfoComponent";
import SearchBar from '../components/SearchBar/SearchBarComponent'




async function fetchPlaylist(playlistID,setModalOptions) {
    try{
        document.getElementById("loading").style.display = "flex";
        const response = await fetch("http://spotify-wordcloud.ddns.net:3000/playlist/" + playlistID);
        const myWords = await response.json();
        const arr = []
        for (var key in myWords){
            arr.push([myWords[key].word,myWords[key].size])
        }
        // const arr = [['aaaa',20],['bbbb',50],['ccc',10],['HOLA',60],['aadsaa',20],['bbsddsbb',50],['ccfdsfsdc',10],['HOLsdfsdA',60],['aaasda',20],['bbsfdbb',50],['cccsdf',10],['HOsdfLA',60],['aasdaa',20],['bsdfbbb',50],['csdfcc',10],['HOfsdfsdLA',60]]
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

        WordCloud(document.getElementById('my_dataviz'), { list: arr,color:colorFunction,hover:hoverFunction } );
    }
    catch(error){
        alert("Sorry we were unable to obtain the wordcloud for this playlist");
        console.log(error)
        document.getElementById("loading").style.display = "none";
    }
 
}

const SpotifyWordCloud = () => {
    const [playlist, setPlaylist] = useState('');
    const [token, setToken] = useState('');
    const [modalOptions, setModalOptions] = useState({});
    useEffect(() => {
        if (playlist){
            document.getElementById("my_dataviz").innerHTML = "";
            fetchPlaylist(playlist,setModalOptions);
        }
    },[playlist]) // <-- here put the parameter to listen

    useEffect(() => {
        document.body.style.backgroundColor = "#1DB954";
        (async ()=>{
            if (!token) {
                const res = await fetch(`http://spotify-wordcloud.ddns.net:3000/anonymous-token`)
                const data = await res.json()
                setToken(data['accessToken'])
            }
        })()
    },[]) 

    return (<>

        <div className='container'>
            <h2>Find the most frequent words in the playlist lyrics</h2> 
            <SearchBar setPlaylist={setPlaylist} token = {token} playlist={playlist}/>
            <div id ="loading" className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            <div id="my_dataviz"></div>
            {Object.keys(modalOptions).length > 0 && <InfoComponent modalOptions={modalOptions}></InfoComponent>}
        </div>

        <style jsx>{`
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
            margin-top: 100px;
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
