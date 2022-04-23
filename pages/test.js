import React from 'react';
import ShareComponent from '../components/ShareComponent/ShareComponent'


const HomeComponent = () => (
  <>
    <ShareComponent label ="test" url="https://zamar-roura.com/spotify-wordcloud" text="Look at this cloud of words of this playlist!" title="Spotify Wordcloud"></ShareComponent>
  </>
);

HomeComponent.propTypes = {};

HomeComponent.defaultProps = {};

export default HomeComponent;
