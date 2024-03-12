import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import typeDefs from './src/typedef.js';
import resolvers from './src/resolver.js';

const server = new ApolloServer({
    typeDefs,
    resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: {
        port: process.env.PORT || 5000,
    }
});

console.log(`Server started at ${url}`);
