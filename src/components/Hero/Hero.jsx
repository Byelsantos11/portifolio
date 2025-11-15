import React from 'react';
import styles from './Hero.module.css';
 import profilePic from '../../assets/profile/gabryel.jpeg';

const Hero = () => {
  return (

    <section id="hero" className={styles.hero}>
      <div className="container">
      <div className={styles.imageArea}>
          <img src={profilePic} alt="Gabryel Rodrigues" className={styles.profileImg} />
        </div>
        <h1>Olá, eu sou Gabryel Rodrigues</h1>
        <p className={styles.subtitle}>
          Software Enginner | Full-Stack
        </p>
        <a href="#contact" className={styles.ctaButton}>
          Entre em contato
        </a>
      </div>
    </section>
  );
};

export default Hero;