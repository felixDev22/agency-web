import { products } from '../constants/content';
import styles from '../constants/styles';
import Button from './Button';
import { FeatureCard } from './featureCard';

const Features = () => {
  return (
    <section id="products" className={`${styles.card} ${styles.paddingYX} `}>
      <div className={`${styles.cardDetails} ${styles.flexStart}`}>
        <h2 className={styles.heading2}>
          The best solutions
          <br></br>for your business
        </h2>
        <div className={styles.pWidth}>
          <p className={styles.paragraph}>
            Unlock seamless transactions and boost efficiency with our reliable
            payment system designed for your business needs.
          </p>
        </div>
        <Button prop={'learn more'} />
      </div>
      <div className={styles.cardImg}>
        {products.map((product, index) => (
          <FeatureCard key={products.id} {...product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Features;
