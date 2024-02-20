import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

type CardProps = {
  name: string;
  img: string;
};

const Card = ({ id, name, img }: CardProps) => {
  return (
    <Link
      to={`/c/${id}`}
      className={styles.card}
      style={{ background: `url(${img})` }}
    >
      <div className={styles.bottom}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default Card;
