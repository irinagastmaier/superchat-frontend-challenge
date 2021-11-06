const initialState = null;

export const starReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPDATE_STAR_REPO':
			return {
				...state,
				loading: true,
				error: false,
			};
		case 'UPDATE_STAR_SUCCESS':
			return {
				...state,
				data: action.payload,
				loading: true,
				error: false,
			};
		case 'UPDATE_STAR_ERROR':
			return {
				...state,
				loading: false,
				error: true,
			};

		default:
			return state;
	}
};
