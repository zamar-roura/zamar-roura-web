import React from "react";
import styles from "./ShareComponent.module.css";
import Button from '@mui/material/Button';

function ShareComponent({url, text, title }) {
  const shareDetails = {url, title, text};

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        window.dataLayer.push({
          event:"share-event"
        });
        await navigator
          .share(shareDetails)
      } catch (error) {
        console.log(`Oops! I couldn't share to the world because: ${error}`);
      }
    } else {
      // fallback code
      console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
      );
    }
  };
  return (<>
    <Button id="share-button" variant="contained" onClick={handleSharing} color="inherit">Share <img className={styles.icon} src="./share.svg" width="20px" height = "20px"></img></Button>
    </>
  );
}

export default ShareComponent;