import styles from '../constants/styles';
import { services } from '../constants/content';

const Services = () => {
  return (
    <section id="services" className={`${styles.flex} ${styles.padding}`}>
      <h2 className={`${styles.heading2} mb-8`}>
        Our services are designed for<br></br>businesses of all sizes
      </h2>
      <div className="w-300px h-300px flex md:flex-row flex-col gap-8">
        {services.map((service, index) => (
          <div key={index}>
            <div>
              <p className={`${styles.pbold}`}>{service.title}</p>
            </div>
            <img src={service.image} className="rounded-[20px] " />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;