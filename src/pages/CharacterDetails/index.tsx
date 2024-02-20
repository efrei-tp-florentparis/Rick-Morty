import { useGetCharacterDetailsQuery } from '../../generated/graphql.tsx';
import { Link, useParams } from 'react-router-dom';
import styles from './styles.module.scss';

const CharacterDetails = () => {
  const { id } = useParams();

  const { loading, error, data } = useGetCharacterDetailsQuery({
    variables: { id: id || '' },
  });

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  if (!data || !data.character) return <p>Aucune donnée trouvée</p>;

  const { character } = data;

  return (
    <div className={styles.page}>
      <Link to="/">Retour</Link>
      <div className={styles.infos}>
        <br />
        <h2>Details du personnage: </h2>
        <img src={character.image} alt="" />
        <p>Nom : {character.name}</p>
        <p>Status : {character.status}</p>
        <p>Species : {character.species}</p>
        <p>Type : {character.type}</p>
        <p>Gender : {character.gender}</p>
        <p>Origin : {character.origin?.name}</p>
        <p>Location : {character.location?.name}</p>
      </div>
    </div>
  );
};

export default CharacterDetails;
