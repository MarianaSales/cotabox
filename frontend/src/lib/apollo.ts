import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()// TODO: change to production url when deployed on heroku.
})