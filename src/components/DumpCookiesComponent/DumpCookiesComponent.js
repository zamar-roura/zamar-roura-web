import React from 'react';
import styles from './DumpCookiesComponent.module.css';
import {isMobile} from 'react-device-detect';
import {pageview} from '../../functions/analytics';
import { useLocation } from 'react-router-dom';

const DumpCookiesComponent = () => {
  const location = useLocation();
  React.useEffect(pageview(location.pathname));
  return (
  <div className={styles.DumpCookiesComponent}>
     The following cookies have been set:
    <h1>
      Member 1
    </h1>
    <div id="d"></div>
    <script>document.getElementById("d").innerHTML = "<b>document.cookie:</b> " + document.cookie</script>
    <a href="/">Home</a>
  </div>
);}

DumpCookiesComponent.propTypes = {};

DumpCookiesComponent.defaultProps = {};

export default DumpCookiesComponent;
