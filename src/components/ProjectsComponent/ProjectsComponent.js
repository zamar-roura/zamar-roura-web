import React from 'react';
import ProjectBoxComponent from './ProjectBoxComponent/ProjectBoxComponent';
import styles from './ProjectsComponent.module.css';

let tweetToLlamaBot={
  'title': "TweetToLlamaBot",
  'description':'Twitter Bot that llamifies any tweet that mentions him.',
  'href':'https://twitter.com/TweetToLlamaBot/'
}

let threeTopThree={
  'title': "ThreeTopThree",
  'description':'Spotify Bot that collects the three most listened songs of my 2 best friends and me and mixes it in a single playlist',
  'href':'https://open.spotify.com/playlist/3ykmrTYQ2CcxqeKD6EmEfh?si=5bce60fd185143c4'
}

let quicklyPressTheButton={
  'title': "QuicklyPressTheButton",
  'description':"Flutter developed app. Once a day you'll get the chance to press the button. Will you be the fastest and beat everyone on the game?",
  'href':'https://play.google.com/store/apps/details?id=com.quicklypressthebutton'
}

let commonDevs={
  'title': "Common Devs",
  'description':"Founder of a mobile app development team. Mainly using Flutter.",
  'href':'https://www.commondevs.com/'
}

let TinderAdventures={
  'title': "TinderAdventures",
  'description':"Case Study Tinder apk decompiling to obtain premium functionalities.",
  'href':'https://github.com/zamar-roura/tinder-adventures'
}

let TinderInstagramMining={
  'title': "TinderInstagramMining",
  'description':"One of the first data mining projects I did after uni. \
  People in my university posted in Instagram where they saw their crush in hopes of getting their instagram. \
  This script gathered that information from instagram to a nice infographic",
  'href':'https://raw.githubusercontent.com/zamar-roura/Tinder_Instagram_Mining/master/Infografia.png'
}
const ProjectsComponent = () => (
  <div className={styles.ProjectsComponent}>
    <h1 className="nomato">Current Online Projects</h1>
    <div className={styles.grid}>
      <ProjectBoxComponent project={tweetToLlamaBot}></ProjectBoxComponent>
      <ProjectBoxComponent project={threeTopThree}></ProjectBoxComponent>
      <ProjectBoxComponent project={quicklyPressTheButton}></ProjectBoxComponent>
    </div>


    <h1>Mobile App Development</h1>
    <div className={styles.grid}>
      <ProjectBoxComponent project={commonDevs}></ProjectBoxComponent>
    </div>

    <h1>App experimentation</h1>
    <div className={styles.grid}>
      <ProjectBoxComponent project={TinderAdventures}></ProjectBoxComponent>
    </div>
    <h1>Interesting concepts</h1>
    <ProjectBoxComponent project={TinderInstagramMining}></ProjectBoxComponent>
  </div>


);

ProjectsComponent.propTypes = {};

ProjectsComponent.defaultProps = {};

export default ProjectsComponent;
