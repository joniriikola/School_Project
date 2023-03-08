import axios from 'axios'


const getAll = async () => {
    const request = axios.get("/data/toppings.json");
    const data = await request.then(response => response.data);
    return data;
  }

// eslint-disable-next-line import/no-anonymous-default-export
export default {getAll}