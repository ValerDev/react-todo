import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos/'
})

export const fetchTodos = async () => {
    const {data} = await api.get('?userId=1')
    return data
}

