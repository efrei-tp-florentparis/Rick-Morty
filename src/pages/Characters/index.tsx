import { useEffect, useState } from 'react';
import Card from '../../components/Card/index.tsx';
import CardContainer from '../../components/CardContainer/index.tsx';
import { useGetCharactersQuery } from '../../generated/graphql.tsx';

import styles from './styles.module.scss';

const Characters = () => {
  const [charactersList, setCharactersList] = useState<object[]>([]);

  const { loading, error, data } = useGetCharactersQuery({
    variables: { page: 1 },
  });

  useEffect(() => {
    return data && setCharactersList(data.characters?.results);
    /*  return data && setCharactersList(data.characters?.results); */
  }, [loading, data]);

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  console.log(data);

  return (
    <div className={styles.page}>
      <h1>Characters</h1>
      <CardContainer>
        {charactersList.map((element: object, key) => {
          return <Card key={key} name={element?.name} img={element?.image} />;
        })}
      </CardContainer>
    </div>
  );
};

export default Characters;
