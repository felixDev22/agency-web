
import styles from '../constants/styles';
import { MdArrowForward } from 'react-icons/md';

const Button = ({prop}) => {
  return (
    <button
      className={`${styles.button} flex items-center justify-center gap-2`}>
      {prop}<MdArrowForward />
    </button>
  );
}

export default Button