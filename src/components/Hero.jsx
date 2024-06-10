// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from '../constants/styles';
import { bizMan } from '../assets';
import { MdArrowForward } from 'react-icons/md';

const Hero = () => {
  return (
    <section id="home" className={`${styles.heroWrapper} ${styles.paddingYX}`}>
      <div className={`${styles.titleWrapper}`}>
        <p className={`text-purple-400 ${styles.textspace}`}>
          CONVENIENT, SECURE AND REWARDING
        </p>
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
        <button
          className={`${styles.button}  flex items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-105 mb-12`}>
          Read More <MdArrowForward />
        </button>
      </div>
      <div className={`${styles.heroImage}`}>
        <img src={bizMan} className="w-[150%] h-[150%] relative mb-5" />
        <div className={`${styles.blurCirle}`}></div>
      </div>
    </section>
  );
};

export default Hero;
