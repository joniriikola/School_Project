import orderService from '../services/orders'

const ordersReducer = (state = [], action) => {
    switch (action.type) {
		case 'GET_ORDER':
			return [...state, action.payload];

		case 'GET_ORDERS':{
			const newOrders = action.payload;
			return newOrders;
		}
		case 'ADD_ORDER':
			return [...state, action.payload];

		default:
			return state;
	}
};


export const createOrder = (newOrder) => {
	return async (dispatch) => {
		const payload = await orderService.createOrder(newOrder);
		if (payload !== undefined) {
			dispatch({type: 'ADD_ORDER', payload});
		}
		else {
			dispatch({type: 'ADD_ORDER', payload: newOrder});
		}
	};
}

export const initializeOrders = () => {
	return async dispatch => {
	  const payload = await orderService.getAll()
	  dispatch({
		type: 'GET_ORDERS',
		payload
	  })
	}
}

export const getOrderById = (id) => {
	return async dispatch => {
	  const payload = await orderService.getOrderById(id)
	  dispatch({
		type: 'GET_ORDERS',
		payload
	  })
	}
}
  
export default ordersReducer
