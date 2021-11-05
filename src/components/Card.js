import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRepo } from '../actions/actions';

export default function Card() {
	const { values } = useParams();
	const array = values.split(',');
	const color = '#' + array[1];
	const user = array[0];
	const repo = 'kitacare';

	const info = localStorage.getItem('info');
//	console.log(info);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchRepo(user, repo));
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
