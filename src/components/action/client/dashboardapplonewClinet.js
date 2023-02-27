import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, ApolloProvider, gql, concat } from '@apollo/client';


const httpLink = new HttpLink({ uri: 'https://s2y6se6j3zcd5giln2d7puk3fi.appsync-api.ap-south-1.amazonaws.com/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-api-key' :"da2-p4sthxqnavguhejmjjmyrgxvfy"
    }
  }));

  return forward(operation);
})

const client_new = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});

export default client_new;