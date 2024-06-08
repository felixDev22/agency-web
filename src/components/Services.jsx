import styles from '../constants/styles';
import { services } from '../constants/content';

const Services = () => {
  return (
    <section
      id="services"
      className={`${styles.flexCenter} ${styles.paddingYX}`}>
      <h2>
        Our services are designed for<br></br>businesses of all sizes
      </h2>
      <div className="w-300px h-450px">
        {services.map((service, index) => (
          <div key={index}>
            <img src={service.image} className="w-50% h-auto object-contain" />
            <div>
              <p className="pbold">{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;