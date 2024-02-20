import { useState } from 'react';
import Card from '../../components/Card/index.tsx';
import CardContainer from '../../components/CardContainer/index.tsx';
import { useGetCharactersQuery } from '../../generated/graphql.tsx';

import styles from './styles.module.scss';

const Characters = () => {
  const [actualPage, setActualPage] = useState<number>(1);

  const { loading, error, data } = useGetCharactersQuery({
    variables: { page: actualPage },
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div className={styles.page}>
      <h1>Characters</h1>
      <CardContainer>
        <>
          {data &&
            data.characters?.results?.map((element) => {
              return (
                <Card
                  id={element?.id}
                  name={element?.name}
                  img={element?.image}
                />
              );
            })}
          <div className={styles.pagination}>
            <button onClick={() => setActualPage(actualPage - 1)}>
              Page précédente
            </button>
            <button onClick={() => setActualPage(actualPage + 1)}>
              Page suivante
            </button>
          </div>
        </>
      </CardContainer>
    </div>
  );
};

export default Characters;
