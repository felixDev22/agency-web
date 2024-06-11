// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navbar, Hero } from './components';
import styles from './constants/styles';
import Info from './components/Info';
import Features from './components/Features';
import About from './components/About';
import Services from './components/Services';
import SignUp from './components/SignUp';
import Footer from './components/Footer';

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
          <Services />
          <SignUp />
          <Footer/>
        </div>
      </div>
    </div>
  );
};
export default App;
