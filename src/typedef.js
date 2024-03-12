import { gql } from 'apollo-server-express';
import { userTypeDef } from './graphql.typedef/userTypedef.js';
import { todoTypeDef } from './graphql.typedef/todoTypedef.js';

const rootTypeDefs = gql`    
    type Query {
        welcome: String!
        getTodo(id: ID!): Todo!
        getTodos: [Todo]!
        getUser(id: ID!): User!
        getUsers: [User]!
    }
` 
const typeDefs = [ rootTypeDefs, userTypeDef, todoTypeDef ];
export default typeDefs;