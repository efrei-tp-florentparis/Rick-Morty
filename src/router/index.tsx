import CharacterDetails from "../pages/CharacterDetails";
import Characters from "../pages/Characters";

const router = [
    {
        path: '/',
        element: <Characters />,
    },
    {
        path: '/c/:id',
        element: <CharacterDetails />,
    }
];

export default router;
