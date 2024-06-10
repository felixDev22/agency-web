// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { navLinks } from '../constants/content';
import styles from '../constants/styles';
import { menu, close, Epay } from '../assets';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.nav}`}>
      <img src={Epay} className='w-[100px] h-[30px] object-contain mt-4'  />
      <ul className={`${styles.deskUl}`}>
        {navLinks.map((nav, index) => (
          <li
            className={`${styles.deskli} hover:border-b-4 hover:border-indigo-500 p-2`}
            key={index}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className={`${styles.menuToggle}`}>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className={`${styles.menuIcon}`}
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} ${styles.mobileMenu} `}>
          <ul className={`${styles.mobileUl}`}>
            {navLinks.map((nav, index) => (
              <li className={`${styles.mobileLi}`} key={index}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
