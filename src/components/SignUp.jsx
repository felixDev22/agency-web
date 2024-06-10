import styles from '../constants/styles';
import { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    surname: '',
    firstname: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <section className={`${styles.card} ${styles.padding}`}>
      <div className={`${styles.cardDetails}`}>
        <h2 className={`${styles.heading2}`}>Sign Up</h2>
        <p className={`${styles.paragraph} max-w-[500px]`}>
          Ready to experience the best digital payment solutions? Sign up now
          and take the first step towards hassle-free transactions.
        </p>
      </div>
      <div className={`${styles.signBox} max-w-[400px]`}>
        <div className="">
          <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="surname"
                id="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="Surname"
                className={`${styles.input}`}
              />
              <input
                type="text"
                name="firstname"
                id="firstname"
                value={formData.firstname}
                onChange={handleChange}
                placeholder="First Name"
                className={`${styles.input}`}
              />
            </div>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`${styles.input} mt-2`}
            />
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
