import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRepo } from '../actions/actions';

export default function Card() {
	const { values } = useParams();
	const array = values.split(',');
	const color = '#' + array[2];
	const user = array[0];
	const repo = array[1];

	const dispatch = useDispatch();
	const { data } = useSelector(state => state.repoReducer);
	console.log(data);

	// let info;
	// useEffect(async () => {
	// 	dispatch(fetchRepo(user, repo));
	// 	await (info = localStorage.getItem('info'));
	// 	info = JSON.parse(info);
	// });

	return (
		<div className="container">
			<div className="row" style={{ backgroundColor: color }}>
				<h1>card</h1>
				{/* {info.forEach(value => {
					<h1>{value.name}</h1>;
				})} */}
			</div>
		</div>
	);
}
