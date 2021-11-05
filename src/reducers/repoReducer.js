const initialState = { repo: [], loading: false, error: false };

export const repoReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'GET_REPO':
			return {
				...state,
				loading: true,
				error: false,
			};
		case 'GET_REPO_SUCCESS':
			return {
				...state,
				data: action.payload,
				loading: true,
				error: false,
			};
		case 'GET_REPO_ERROR':
			return {
				...state,
				loading: false,
				error: true,
			};
		default:
			return state;
	}
};
