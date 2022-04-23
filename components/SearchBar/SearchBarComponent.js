import React, { useState } from "react";
import styles from "./SearchBarComponent.module.css";

// import SearchIcon from "@material-ui/icons/Search";
// import CloseIcon from "@material-ui/icons/Close";

function SearchBar({searchFunction, clearInputHandler, placeholder,readOnly=false}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = async (event) => {
      const searchWord = event.target.value;
      setWordEntered(searchWord);
      if (searchWord.length > 3){
      var  data = await searchFunction(searchWord);
      setFilteredData(data);
      }
  if (searchWord === "") {
      setFilteredData([]);
      }
  };
    const clearInput = (event) => {
        clearInputHandler(event);
        setFilteredData([]);
        setWordEntered("");
    };
    return (
      <div className={styles.search}>
        <div className={styles.searchInputs}>
          {!readOnly ? <input
            type="text"
            placeholder={placeholder}
            value={wordEntered}
            onChange={handleFilter}
          /> : <input
          type="text"
          placeholder={"Gathering playlists from spotify, wait a second ..."}
          readOnly={true} />}
          
        </div>
        {filteredData.length != 0 && (
          <div className={styles.dataResult}>
            {filteredData.slice(0, 15).map((value, key) => {
              return (
                  <div key={value.uri.split(":")[2]} data-value={value.uri.split(":")[2]} data-title={value.name}  onClick={clearInput} className={styles.dataItem}>
                      <img data-value={value.uri.split(":")[2]} data-title={value.name} src={value.images[0] ? value.images[0].url : ""} height="80px" width="80px"></img> 
                      <div data-value={value.uri.split(":")[2]} data-title={value.name} className={styles.textItem}>{value.name}</div>
                 </div>
              )
            })}
          </div >
        )}
      </div>
    );
  }

  export default SearchBar;