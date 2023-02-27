import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, ApolloProvider, gql, concat } from '@apollo/client';


const httpLink = new HttpLink({ uri: 'https://nbvp6cpbrrdppamtuf6hthqrx4.appsync-api.ap-south-1.amazonaws.com/graphql' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-api-key' :"da2-rdvlh5trend5jaalbxygz675ma"
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
});

const httpLink1 = new HttpLink({ uri: 'https://atcyqqcsp5amrnt5uf7iww7fae.appsync-api.ap-south-1.amazonaws.com/graphql' });

const authMiddleware1 = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'x-api-key' :"da2-k75gtr2zh5b7tahnmhklxoyfji"
    }
  }));

  return forward(operation);
})

export const client2 = new ApolloClient({
    cache: new InMemoryCache(),
    link: concat(authMiddleware1, httpLink1),
});


export default client;