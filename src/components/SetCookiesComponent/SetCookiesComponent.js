import React, { useEffect } from "react";
import styles from './SetCookiesComponent.module.css';
import {pageview} from '../../functions/analytics';
import { useLocation } from 'react-router-dom';

const SetCookiesComponent = () => {

  useEffect(() => {
      alert("hey");
      document.cookie="Secure-SameSite-Lax-SameParty=1; Secure; SameSite=Lax; SameParty";
    });
  const location = useLocation();
  React.useEffect(pageview(location.pathname));
  return (
  <div className={styles.SetCookiesComponent}>
     The following cookies have been set:
    <div id="c">
      <ul>
        <li>samesite-unspecified-cookie=1; Secure</li>
        <li>samesite-none-cookie=1; <b>SameSite=None</b>; Secure</li>
        <li>samesite-lax-cookie=1; <b>SameSite=Lax</b>; Secure</li>
        <li>samesite-none-sameparty-cookie=1; <b>SameSite=None; SameParty</b>; Secure</li>
        <li>samesite-lax-sameparty-cookie=1; <b>SameSite=Lax; SameParty</b>; Secure</li>
        <li>sameparty-cookie=1; <b>SameParty</b>; Secure</li>
      </ul>
    </div>
    <a href="/">Home</a>
  </div>
);}

SetCookiesComponent.propTypes = {};

SetCookiesComponent.defaultProps = {};

export default SetCookiesComponent;
