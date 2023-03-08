import sandwichesService from '../services/sandwiches'

const sandwichesReducer = (state = [], action) => {
    switch (action.type) {
		case 'GET_SANDWICH':
			return [...state, action.payload];

		case 'GET_SANDWICHES':{
			const newSandwiches = action.payload;
			const allSandwiches = state.concat(newSandwiches);
			return allSandwiches;
		}
		case 'ADD_SANDWICH':
			return [...state, action.payload];

		case 'REMOVE_SANDWICH':
			const newSandwiches = state.filter(s => s.id.toString() !== action.payload.toString());
			return newSandwiches;

		default:
			return state;
	}
};


export const createSandwich = (newSandwich) => {
	return async (dispatch) => {
		const payload = await sandwichesService.createSandwich(newSandwich);
		console.log(payload)
		if (payload !== undefined) {
			dispatch({type: 'ADD_SANDWICH', payload});
		}
		else {
			dispatch({type: 'ADD_SANDWICH', payload: newSandwich});
		}
	};
}

export const initializeSandwiches = () => {
	return async dispatch => {
	  const payload = await sandwichesService.getAll()
	  dispatch({
		type: 'GET_SANDWICHES',
		payload
	  })
	}
}

export const getSandwichById = (id) => {
	return async dispatch => {
	  const payload = await sandwichesService.getSandwichById(id)
	  dispatch({
		type: 'GET_SANDWICH',
		payload
	  })
	}
}

export const removeSandwich= (id) => {
	//console.log(product)
	return async (dispatch) => {
		const payload = await sandwichesService.removeSandwich(id)
		dispatch({
			type: 'REMOVE_SANDWICH', 
			payload: id});
	};
};

  
export default sandwichesReducer
