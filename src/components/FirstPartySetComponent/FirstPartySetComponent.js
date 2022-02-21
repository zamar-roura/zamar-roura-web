import React from 'react';
import styles from './FirstPartySetComponent.module.css';
import {isMobile} from 'react-device-detect';
import {pageview} from '../../functions/analytics';
import { useLocation } from 'react-router-dom';

const FirstPartySetComponent = () => {
  const location = useLocation();
  React.useEffect(pageview(location.pathname));
  return (
  <div className={styles.FirstPartySetComponent}>
    <a href="/setcookies">Click here to set cookies.</a>
<h1>
Member 1      </h1>

    <div id="h"><b>Cookie header:</b> </div>
    <div id="d"></div>
    <script>document.getElementById("d").innerHTML = "<b>document.cookie:</b> " + document.cookie</script>
    <iframe src="/dumpcookies" width="700" height="400"></iframe>
    <iframe src="https://www.commondevs.com/first-party-sets" width="900" height="600"></iframe>
  </div>
);}

FirstPartySetComponent.propTypes = {};

FirstPartySetComponent.defaultProps = {};

export default FirstPartySetComponent;
