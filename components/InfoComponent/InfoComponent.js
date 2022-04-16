import React, { useEffect} from "react";
import styles from "./InfoComponent.module.css";

function InfoComponent({modalOptions}) {
    useEffect(() => {
      document.getElementById("info").style.position = "absolute";
      document.getElementById("info").style.top =  modalOptions.y +"px";;
      document.getElementById("info").style.left = modalOptions.x +"px";
    },[modalOptions]) 

    return (
      <div id ="info" className={styles.infoComponent}>
        {modalOptions.word} {modalOptions.frequency} times
      </div>
    );
  }

  export default InfoComponent;