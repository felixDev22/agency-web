// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../constants/styles';
import { heroPic } from '../assets';

const Hero = () => {
  return (
    <section id="home" className={`${styles.heroWrapper} ${styles.paddingY}`}>
      <div className={`${styles.titleWrapper}`}>
        <h1 className={`${styles.h1}`}>
          SIMPLE & FAST<br></br>
          <span className={`${styles.h1Gradient}`}>DIGITAL </span>
          PAYMENT<br></br>SOLUTIONS
        </h1>
        <div className={`${styles.pWidth}`}>
          <p className={`${styles.paragraph}`}>
            Unlock convenience with our swift and secure digital payment
            solutions. Say goodbye to hassle, hello to efficiency!
          </p>
        </div>
      </div>
      <div className={`${styles.heroImage}`}>
        <img src={heroPic} className="w-[700px] h-auto" />
      </div>
    </section>
  );
};

export default Hero;
