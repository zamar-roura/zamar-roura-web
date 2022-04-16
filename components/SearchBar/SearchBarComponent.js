import React, { useState } from "react";
import styles from "./SearchBarComponent.module.css";
import Image from 'next/image'

// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";
async function searchPlaylist(query,token){
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
    const deepSearch = await fetch("https://api.spotify.com/v1/playlists/"+query, {
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
function SearchBar({ placeholder, token,setPlaylist}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [data, setData] = useState("");
    const handleFilter = async (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
    
        if (searchWord.length > 3){
        const data = await searchPlaylist(searchWord,token);
        setData(data);
        setFilteredData(data);
        }
    if (searchWord === "") {
        setFilteredData([]);
        }
    };
  
    const clearInput = (event) => {
        console.log(event.target)
        setPlaylist(event.target.getAttribute("data-value"))
        setFilteredData([]);
        setWordEntered("");
    };
  
    return (
      <div className={styles.search}>
        <div className={styles.searchInputs}>
          <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          />
        </div>
        {filteredData.length != 0 && (
          <div className={styles.dataResult}>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                  <div key={value.uri.split(":")[2]} data-value={value.uri.split(":")[2]} onClick={clearInput} className={styles.dataItem}>
                      <img data-value={value.uri.split(":")[2]} src={value.images[0].url} height="80px" width="80px"></img> 
                      <div data-value={value.uri.split(":")[2]} className={styles.textItem}>{value.name}</div>
                 </div>
              )
            })}
          </div >
        )}
      </div>
    );
  }

  export default SearchBar;