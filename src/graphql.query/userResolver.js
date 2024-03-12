import axios from 'axios';
export const getUser = async(parent, { id }) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.data;
}

export const getUsers = async() => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return response.data;
}

