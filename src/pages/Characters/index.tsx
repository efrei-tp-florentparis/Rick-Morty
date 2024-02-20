import {useGetCharactersQuery} from '../../generated/graphql.tsx'

const CharactersPage = () => {
    const { loading, error, data } = useGetCharactersQuery();

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    console.log(data);

    return <span>BLABLA</span>
}

export default CharactersPage;