import { getTodo, getTodos } from "./graphql.query/todoResolver.js";
import { getUser, getUsers } from "./graphql.query/userResolver.js";
const resolvers = {
    Query: {
        welcome: async () => {
            return "Welcome to my GRAPH QL Server";
        },
        getTodo,
        getTodos,
        getUser,
        getUsers
    }
}
export default resolvers;