import React, { useState } from "react";
import styles from "./ShareComponent.module.css";
import Button from '@mui/material/Button';
import Image from 'next/image'
import SVG from './share.svg'
import { style } from "@mui/system";
function ShareComponent({url, text, title }) {
  const shareDetails = {url, title, text};

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        window.dataLayer.push({
          event:"share-event",
          url:url,
          title:title
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