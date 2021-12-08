import React from 'react';
import styles from './ContactComponent.module.css';
import SocialContactComponent from './SocialContactComponent/SocialContactComponent';
import { ReactComponent as Gmail } from '../../img/social/gmail.svg';
import { ReactComponent as Github } from '../../img/social/github.svg';
import { ReactComponent as Discord } from '../../img/social/discord.svg';
import { ReactComponent as StackOverflow } from '../../img/social/stackoverflow.svg';
import { ReactComponent as Steam } from '../../img/social/steam.svg';
import { ReactComponent as Twitter } from '../../img/social/twitter.svg';
import { ReactComponent as Linkedin } from '../../img/social/linkedin.svg';
const ContactComponent = () => (

  <div className={styles.ContactComponent}>
    <h1 className="nomato"> You can contact me in:</h1>
    <div className={styles.grid}>
      <SocialContactComponent svg={Gmail} title="EMAIL" href="mailto:zamarfazal@gmail.com"></SocialContactComponent>
      <SocialContactComponent svg={Github} title="GITHUB" href="https://github.com/zamar-roura"></SocialContactComponent>
      <SocialContactComponent svg={Linkedin} title="LINKEDIN" href="https://www.linkedin.com/in/zamarelahi"></SocialContactComponent>
      <SocialContactComponent svg={StackOverflow} title="STACKOVERFLOW" href="https://stackoverflow.com/users/7355277/zamar"></SocialContactComponent>
    </div>
    <h1> You can also find me in:</h1>
    <div className={styles.grid}>
      <SocialContactComponent svg={Steam} title="STEAM" href="https://steamcommunity.com/profiles/76561197992334957"></SocialContactComponent>
      <SocialContactComponent svg={Twitter} title="TWITTER" href="https://twitter.com/ZamarRoura"></SocialContactComponent>
      <SocialContactComponent svg={Discord} title="DISCORD" href="https://discordapp.com/users/Zamar#6471"></SocialContactComponent>
    </div>
  </div>
);

ContactComponent.propTypes = {};

ContactComponent.defaultProps = {};

export default ContactComponent;
