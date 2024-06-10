import styles from '../constants/styles';
import { services } from '../constants/content';

const Services = () => {
  return (
    <section id="services" className={`${styles.flex} ${styles.padding} mt-20`}>
      <h2 className={`${styles.heading2} mb-8`}>
        Our services are designed for<br></br>businesses of all sizes
      </h2>
      <div className="w-300px h-300px flex md:flex-row flex-col gap-8 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative transition-transform duration-300 hover:scale-110">
            <img src={service.image} alt="servi" className="rounded-[20px] " />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-indigo-600 to-transparent p-4 rounded-b-[20px]">
              <p className={`${styles.pbold} text-white`}>{service.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
