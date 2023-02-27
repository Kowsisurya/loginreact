import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, ApolloProvider, gql, concat } from '@apollo/client';


const httpLink = new HttpLink({ uri: 'https://7iewykl3srfonlwkknipwv7hli.appsync-api.ap-south-1.amazonaws.com/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-api-key' :"da2-gco5ozygoretbkjztomfcm23wy"
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});

export default client;