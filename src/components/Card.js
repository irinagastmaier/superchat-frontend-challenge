import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRepo } from '../actions/actions';

export default function Card() {
	const { values } = useParams();
	const array = values.split(',');
	const color = '#' + array[1];
	const user = array[0];
	const repoPath = 'challenge-latana';

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRepo(user, repoPath));
	}, []);

	//`http://localhost:3000/${user}/${repo}/${icon}/${color}`
	return (
		<div className="container">
			<div className="row" style={{ backgroundColor: color }}>
				<h1>card</h1>
			</div>
		</div>
	);
}
