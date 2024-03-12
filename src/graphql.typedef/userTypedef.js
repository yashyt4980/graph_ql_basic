import { gql } from 'apollo-server-express';

export const userTypeDef = gql`
    type User {
        id: ID!
        name: String!
        username: String!
        email: String!
        phone: String!
    }
`