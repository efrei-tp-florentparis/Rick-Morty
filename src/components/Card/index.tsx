import styles from './styles.module.scss';

type CardProps = {
  name: string;
  img: string;
};

const Card = ({ name, img }: CardProps) => {
  return (
    <div className={styles.card} style={{ background: `url(${img})` }}>
      <div className={styles.bottom}>
        <span>{name}</span>
      </div>
    </div>
  );
};

export default Card;
