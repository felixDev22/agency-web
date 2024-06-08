import styles from '../constants/styles';
import { phone } from '../assets';

const About = () => {
  return (
    <section id="about" className={`${styles.cardReverse} ${styles.paddingYX}`}>
      <div className={`${styles.cardImg} w-500px h-auto`}>
        <img src={phone} className="w-[90%] h-[90%] object-contain" />
      </div>
      <div className={`${styles.cardDetails}`}>
        <h1 className={`${styles.heading2}}`}>
          Why our products<br></br>are different
        </h1>
        <p className={`${styles.paragraph}  ${styles.cardDetails}`}>
          Discover the unique advantages of our digital payment solutions,
          <br></br>designed to enhance security, efficiency, and customer
          satisfaction.
        </p>
        <div className="flex md:flex-row flex-col gap-2 md:gap-4">
          <div className={`${styles.box2}`}>
            <h4 className="text-white">
              Enhanced <br></br>Security
            </h4>
          </div>
          <div className={`${styles.box2}`}>
            <h4 className="text-white">
              24/7 <br></br>Support
            </h4>
          </div>
          <div className={`${styles.box2}`}>
            <h4 className="text-white">
              User-Friendly<br></br> Interface
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
