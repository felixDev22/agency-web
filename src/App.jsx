// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar, Hero } from './components';
import styles from './constants/styles';
import Info from './components/Info';
import Features from './components/Features';
import About from './components/About';



const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.containerWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` bg-primary ${styles.flexStart}`}>
        <div className={`${styles.containerWidth}`}>
          <Hero />
          <Info />
          <Features />
          <About />
        </div>
      </div>

      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.containerWidth}`}>
          stats business billing CardDeal Testimonials client create footer
        </div>
      </div>
    </div>
  );
};
export default App;
