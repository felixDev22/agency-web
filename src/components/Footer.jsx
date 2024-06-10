import { Epay } from '../assets';
import { footerLinks } from '../constants/content';
import styles from '../constants/styles';

const Footer = () => {
  return (
    <section
      className={`${styles.padding} bg-black-gradient w-full h-[400px] flex`}>
      <div>
        <img src={Epay} className="w-[100px] h-[30px] object-contain mt-4" />
        <p className={`${styles.paragraph} max-w-[400px]`}>
          Experience the future of digital payments with our innovative
          solutions. Join us today and unlock the potential of seamless
          transactions!
        </p>
      </div>

      <div className="flex justify-between flex-wrap mt-10 ml-10">
        <div className="flex-col">
          {footerLinks.map((footerLink, index) => (
            <div key={index}>
              <p className={`${styles.pbold}`}>{footerLink.title}</p>

              <ul>
                {footerLink.links.map((link, index) => (
                  <div key={index}>
                    <p className={styles.paragraph}>{link.title}</p>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
