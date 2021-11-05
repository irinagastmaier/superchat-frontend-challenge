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
	const dataToArray = [data];
	console.log(dataToArray);

	useEffect(() => {
		dispatch(fetchRepo(user, repo));
	}, []);

	return (
		<div className="container">
			<div className="row" style={{ backgroundColor: color }}>
				{data === undefined ? (
					<div>Loading... </div>
				) : (
					dataToArray &&
					dataToArray.map((info, i) => (
						<div key={i}>
							<h1>{info.id}</h1>
						</div>
					))
				)}
			</div>
		</div>
	);
}
