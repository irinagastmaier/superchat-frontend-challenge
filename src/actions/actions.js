import Axios from 'axios';

export const fetchUserAction = () => async dispatch => {
	const options = {
		method: 'GET',
		url: `https://api.github.com/users/${user}`,
		headers: {
			Accept: application / vnd.github.v3 + json,
		},
	};

	const response = await Axios.request(options);

	dispatch({ type: 'GET_USER', payload: response.data });
};
