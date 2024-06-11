
import styles from '../constants/styles';
import { MdArrowForward } from 'react-icons/md';

// eslint-disable-next-line react/prop-types
const Button = ({prop}) => {
  return (
    <button
      className={`${styles.button} flex items-center justify-center gap-2 transform transition-transform duration-300 hover:scale-105`}>
      {prop}
      <MdArrowForward />
    </button>
  );
}

export default Button