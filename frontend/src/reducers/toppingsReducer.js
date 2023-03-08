import toppingsService from '../services/toppings'

const toppingsReducer = (state = [], action) => {
    switch (action.type) {

		case 'GET_TOPPINGS':{
			const newToppings = action.payload;
			const allToppings = state.concat(newToppings);
			return allToppings;
		}
		default:
			return state;
	}
};

export const initializeToppings = () => {
	return async dispatch => {
	  const payload = await toppingsService.getAll()
	  dispatch({
		type: 'GET_TOPPINGS',
		payload
	  })
	}
}


export default toppingsReducer