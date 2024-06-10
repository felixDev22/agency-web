import { Epay } from '../assets';
import styles from '../constants/styles';

const Footer = () => {
  return (
    <section className={`${styles.padding} bg-black-gradient w-full h-[400px]`}>
      <img src={Epay} className="w-[100px] h-[30px] object-contain mt-4" />
      <p className={`${styles.paragraph} max-w-[400px]` }>
        Experience the future of digital payments with our innovative solutions.
        Join us today and unlock the potential of seamless transactions!
      </p>

      <div></div>



    </section>
  );
};

export default Footer;
