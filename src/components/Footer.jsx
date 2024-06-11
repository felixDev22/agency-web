import { Epay } from '../assets';
import { Supports, footerLinks } from '../constants/content';
import styles from '../constants/styles';

const Footer = () => {
  return (
    <section
      className={`${styles.padding} bg-black-gradient w-full h-auto flex l:flex-col justify-between flex-col md:flex-row lg:flex-row`}>
      <div className="flex flex-col items-start mb-10">
        <img
          src={Epay}
          alt="Epay Logo"
          className="w-[100px] h-[30px] object-contain mt-4"
        />
        <p className={`${styles.paragraph} max-w-[400px] mt-4 mr-6`}>
          Experience the future of digital payments with our innovative
          solutions. Join us today and unlock the potential of seamless
          transactions!
        </p>
      </div>

      <div className="flex flex-wrap mt-4 ">
        <div className="flex">
          {footerLinks.map((footerLink, index) => (
            <div key={index} className="mr-10">
              <p className={`${styles.pbold} mb-2`}>{footerLink.title}</p>
              <ul>
                {footerLink.links.map((link, subIndex) => (
                  <li key={subIndex} className="mb-1">
                    <p className={styles.paragraph2}>{link.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="ml-20">
            <p className={`${styles.pbold} mb-2`}>Support</p>
            <ul>
              {Supports.map((support, index) => (
                <li key={index} className="mb-1">
                  <p className={styles.paragraph2}>{support.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
