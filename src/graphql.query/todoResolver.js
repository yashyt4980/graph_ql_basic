import axios from 'axios';
export const getTodo = async(parent, { id }) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.data;
}

export const getTodos = async() => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    return response.data;
}

