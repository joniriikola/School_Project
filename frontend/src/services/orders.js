import axios from 'axios'
const port = '3000'
const baseUrl = 'v1/order'


const getAll = async () => {
    const request = axios.get(`http://tie-webarc-37.it.tuni.fi:${port}/${baseUrl}`);
    const data = await request.then(response => response.data);
    return data;
  }

const getOrderById = async (id) => {
    const request = axios.get(`http://tie-webarc-37.it.tuni.fi:${port}/${baseUrl}/${id}`);
    const data = request.then(response => response.data);
    return data
}

const createOrder = async (newOrder) => {
    let response;
    try {
        response = await axios.post(`http://tie-webarc-37.it.tuni.fi:${port}/${baseUrl}`, newOrder);
    } catch (error) {
        return;
    }
    return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll, getOrderById, createOrder}