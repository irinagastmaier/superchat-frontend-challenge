const initialState = { user: '', repos: [], data: {}, loading: false, error: false };

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SEARCH_USER':
			return {
				...state,
				user: action.payload,
				loading: true,
				error: false,
			};
		case 'GET_USERDATA':
			return {
				...state,
				loading: true,
				error: false,
			};
		case 'GET_USERDATA_SUCCESS':
			return {
				...state,
				data: action.payload,
				loading: true,
				error: false,
			};
		case 'GET_USERDATA_ERROR':
			return {
				...state,
				loading: false,
				error: true,
			};
		case 'GET_REPOS':
			return {
				...state,
				loading: true,
				error: false,
			};
		case 'GET_REPOS_SUCCESS':
			return {
				...state,
				repos: action.payload,
				loading: true,
				error: false,
			};
		case 'GET_REPOS_ERROR':
			return {
				...state,
				loading: false,
				error: true,
			};

		default:
			return state;
	}
};
