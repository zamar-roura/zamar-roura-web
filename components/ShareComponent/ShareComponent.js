import React, { useState } from "react";
import styles from "./ShareComponent.module.css";

function ShareComponent({ label, url, text, title }) {
  const shareDetails = {url, title, text};

  const handleSharing = async () => {
    if (navigator.share) {
      try {
        await navigator
          .share({ title: "Example Page", url: "" })
          .then(() =>
            console.log("Hooray! Your content was shared to tha world")
          );
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
  return (
    <button className="sharer-button" onClick={handleSharing}>
      <span className="sharer-button-text">{label}</span>
    </button>
  );
}

export default ShareComponent;