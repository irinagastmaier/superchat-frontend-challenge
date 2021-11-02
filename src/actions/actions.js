import axios from 'axios';

import {
	GET_REPOS,
	GET_REPOS_ERROR,
	GET_REPOS_SUCCESS,
	GET_USERDATA,
	GET_USERDATA_ERROR,
	GET_USERDATA_SUCCESS,
	SEARCH_USER,
} from './actionTypes';

export function searchUser(user) {
	return {
		type: SEARCH_USER,
		user,
	};
}

export function getUserData() {
	return {
		type: GET_USERDATA,
	};
}

function getUserDataSuccess(data) {
	return {
		type: GET_USERDATA_SUCCESS,
		userData: data,
	};
}

function getUserDataErr(err) {
	return {
		type: GET_USERDATA_ERROR,
		err,
	};
}

function getRepos() {
	return {
		type: GET_REPOS,
	};
}

function getReposSuccess(data) {
	return {
		type: GET_REPOS_SUCCESS,
		repos: data,
	};
}

function getReposErr(err) {
	return {
		type: GET_REPOS_ERROR,
		err,
	};
}

export function fetchUserData(user) {
	return dispatch => {
		dispatch(getUserData());
		return axios
			.get(`https://api.github.com/users/${user}`)
			.then(res => dispatch(getUserDataSuccess(res.data)))
			.catch(err => dispatch(getUserDataErr(err)));
	};
}

function fetchRepos(user) {
	return dispatch => {
		dispatch(getRepos());
		return axios
			.get(`https://api.github.com/users/${user}/repos`)
			.then(res => dispatch(getReposSuccess(res.data)))
			.catch(err => dispatch(getReposErr(err)));
	};
}

export function fetchUserAndRepos(user) {
	return (dispatch, getState) => {
		return dispatch(fetchUserData(user)).then(() => {
			const { currentState } = getState();
			if (!currentState.isFetching && currentState.userData.message) {
				return;
			}
			return dispatch(fetchRepos(user));
		});
	};
}
