import axios from 'axios';

import {
	GET_REPO,
	GET_REPOS,
	GET_REPOS_ERROR,
	GET_REPOS_SUCCESS,
	GET_REPO_ERROR,
	GET_REPO_SUCCESS,
	GET_USERDATA,
	GET_USERDATA_ERROR,
	GET_USERDATA_SUCCESS,
	SEARCH_USER,
} from './actionTypes';

export function searchUser(user) {
	return {
		type: SEARCH_USER,
		payload: user,
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
		payload: data,
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

function getReposSuccess(repos) {
	return {
		type: GET_REPOS_SUCCESS,
		payload: repos,
	};
}

function getReposErr(err) {
	return {
		type: GET_REPOS_ERROR,
		err,
	};
}

function getRepo() {
	return {
		type: GET_REPO,
	};
}

function getRepoSuccess(repo) {
	return {
		type: GET_REPO_SUCCESS,
		payload: repo,
	};
}

function getRepoErr(err) {
	return {
		type: GET_REPO_ERROR,
		err,
	};
}

export function fetchUserData(user) {
	return dispatch => {
		dispatch(getUserData());
		return axios
			.get(`https://api.github.com/users/${user}`)
			.then(res => {
				dispatch(getUserDataSuccess(res.data));
				localStorage.setItem('data', JSON.stringify(res.data));
			})
			.catch(err => dispatch(getUserDataErr(err)));
	};
}

function fetchRepos(user) {
	return dispatch => {
		dispatch(getRepos());
		return axios
			.get(`https://api.github.com/users/${user}/repos?page=1&per_page=100`)
			.then(res => {
				dispatch(getReposSuccess(res.data));
				localStorage.setItem('repos', JSON.stringify(res.data));
				window.location.href = '/repos';
			})
			.catch(err => dispatch(getReposErr(err)));
	};
}

export function fetchUserAndRepos(user) {
	return dispatch => {
		return dispatch(fetchUserData(user)).then(() => {
			return dispatch(fetchRepos(user));
		});
	};
}

export function fetchRepo(user, repo) {
	return dispatch => {
		dispatch(getRepo());
		return axios
			.get(`https://api.github.com/repos/${user}/${repo}`, {
				headers: {
					Accept: 'application/vnd.github.v3+json',
					Authorization: `${'Bearer ' + process.env.REACT_APP_TOKEN}`,
				},
			})
			.then(res => {
				dispatch(getRepoSuccess(res.data));
				localStorage.setItem('info', JSON.stringify(res.data));
				// let info = localStorage.getItem('info');
				// info = JSON.parse(info);
			})
			.catch(err => dispatch(getRepoErr(err)));
	};
}
