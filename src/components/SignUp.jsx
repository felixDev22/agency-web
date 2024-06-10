import styles from '../constants/styles';
import { useState } from 'react';

function SignUp() {
  const [formData, setFormData] = useState({
    surname: '',
    firstname: '',
    email: '',
  });

  const handleChange = (e) => {
    const { email, value } = e.target;
    setFormData({
      ...formData,
      [email]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    
  );
}

export default SignUp;
