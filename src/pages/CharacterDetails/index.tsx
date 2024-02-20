import {useGetCharacterDetailsQuery} from '../../generated/graphql.tsx'
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
    const { id } = useParams();

    const { loading, error, data } = useGetCharacterDetailsQuery({
        variables: { id: id || "" }
    });

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    if (!data || !data.character) return <p>Aucune donnée trouvée</p>;

    const { character } = data;

    return (
        <div>
            <a href="/">Retour</a>
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
    );
}

export default CharacterDetails;
