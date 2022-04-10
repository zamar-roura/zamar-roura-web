import React from 'react';
import styles from './NameComponent.module.css';
import GoBackComponent from '../GoBackComponent/GoBackComponent';
import { useRouter } from 'next/router';
import Image from 'next/image'

function Back() {
  const router = useRouter()
  if (router.pathname !== "/") {
    return <GoBackComponent />
  }
  return <div></div>
}


const NameComponent = () => (
  <>
    <Back></Back>
    <div className={styles.NameComponent}>
      <div className={styles.headerblock}>
        <h1>ZAMAR ROURA</h1>
        <h2 className={styles.subtitle + " secondary-color"}>Software Developer</h2>
      </div>
      <div className={styles.imgframe}>
        <Image layout='fill' src="/images/profile-photo.jpg" alt="Zamar"></Image>
      </div>
    </div>
  </>
);

NameComponent.propTypes = {};

NameComponent.defaultProps = {};

export default NameComponent;
