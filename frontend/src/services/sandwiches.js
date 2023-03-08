import axios from 'axios'
const baseUrl = 'v1/sandwich'
const port = '3000'


const getAll = async () => {
    const request = axios.get(`http://tie-webarc-37.it.tuni.fi:${port}/${baseUrl}`);
    const data = await request.then(response => response.data);
    return data;
  }

const getSandwichById = async (id) => {
    const request = axios.get(`http://tie-webarc-37.it.tuni.fi:${port}/${baseUrl}/${id}`);
    const data = request.then(response => response.data);
    return data
}

const createSandwich = async (newSandwich) => {
    let response;
    try {
        response = await axios.post(`http://tie-webarc-37.it.tuni.fi:${port}/${baseUrl}`, newSandwich);
    } catch (error) {
        console.log(error)
        return;
    }
    return response.data
}

const removeSandwich = async (id) => {
    console.log(id)
    const request = axios.delete(`http://tie-webarc-37.it.tuni.fi:${port}/${baseUrl}/${id}`);
    const response = await request;
    return response.data;
}

const updateSandwich = async (id, newSandwich) => {
    const request = axios.put(`${baseUrl}/${id}`, newSandwich)
    return request.then(response => response.data)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, getSandwichById, createSandwich, updateSandwich, removeSandwich}