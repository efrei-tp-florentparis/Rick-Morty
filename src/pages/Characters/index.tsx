import {useGetCharactersQuery} from '../../generated/graphql.tsx'

const Characters = () => {
    const { loading, error, data } = useGetCharactersQuery({
        variables: { page: 1 }
    });

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    console.log(data);

    return <span>BLABLA</span>
}

export default Characters;
