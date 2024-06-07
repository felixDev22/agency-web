import styles from '../constants/styles';

// eslint-disable-next-line react/prop-types
export const FeatureCard = ({ title, desc }) => {
  return (
    <div className={`${styles.box}`}>
      <h4 className={`${styles.pbold}`}>{title}</h4>
      <h4 className="text-[#fff]">{desc}</h4>
    </div>
  );
};
