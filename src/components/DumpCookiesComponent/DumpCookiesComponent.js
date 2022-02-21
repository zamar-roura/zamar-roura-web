import React, { useEffect } from "react";
import styles from './DumpCookiesComponent.module.css';
import {isMobile} from 'react-device-detect';
import {pageview} from '../../functions/analytics';
import { useLocation } from 'react-router-dom';

const DumpCookiesComponent = () => {
  const location = useLocation();
  React.useEffect(pageview(location.pathname));
  useEffect(() => {
    document.getElementById("d").innerHTML = "<b>document.cookie:</b> " + document.cookie
  });
  return (
  <div className={styles.DumpCookiesComponent}>
     The following cookies have been set:
    <div id="d"></div>
    <a href="/firstpartyset">Home</a>
  </div>
);}

DumpCookiesComponent.propTypes = {};

DumpCookiesComponent.defaultProps = {};

export default DumpCookiesComponent;
