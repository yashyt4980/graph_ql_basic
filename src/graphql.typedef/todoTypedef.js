import { gql } from 'apollo-server-express'
export const todoTypeDef = gql`
    type Todo {
        userId: ID!
        id: ID!
        title: String!
        completed: Boolean!
    }
`