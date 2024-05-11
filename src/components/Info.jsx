
import { info } from "../constants/content";
import styles from "../constants/styles";

const Info = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.brandSection}`}>
      {info.map((info) => (
        <div key={info.id}>
          <h4 className={`${styles.brandRate}`}>{info.rates}</h4>
          <p className={`${styles.brandDesc}`}>{info.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Info;