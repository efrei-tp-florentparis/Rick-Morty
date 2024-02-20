import React from 'react';

import styles from './styles.module.scss';

type CardContainerProps = {
  children: React.ReactElement;
};

const CardContainer = ({ children }: CardContainerProps) => {
  return <div className={styles.container_cards}>{children}</div>;
};

export default CardContainer;
