import styles from '../constants/styles';
import { bizMan } from '../assets';

const About = () => {
  return (
    <section className={`${styles.card}`}>
      <div className="w-50% h-50%">
        <img src={bizMan} className="w-[60%] h-[60%] object-contain" />
      </div>
      <div>
        <h1 className={`${styles.heading2}`}>
          Why our products<br></br>are different
        </h1>
        <p className={`${styles.paragraph}  ${styles.cardDetails}`}>
          Unlock convenience with our swift and secure digital payment
          solutions. Say goodbye to hassle, hello to efficiency!
        </p>
      </div>
    </section>
  );
};

export default About;
