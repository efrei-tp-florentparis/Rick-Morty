// apollo
import {ApolloProvider} from '@apollo/client';
import {ApolloClient, InMemoryCache} from '@apollo/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import router from "./router";

const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
});

function App() {
    const browserRouter = createBrowserRouter(router);

    return (
        <>
            <ApolloProvider client={client}>
                <RouterProvider router={browserRouter} />
            </ApolloProvider>
        </>
    )
}

export default App
