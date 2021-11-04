import React from 'react';
import { useParams } from 'react-router-dom';

export default function Card() {
	const { values } = useParams();
	const array = values.split(',');
	console.log(array);
	const color = '#' + array[1];
	console.log(color);
	//`http://localhost:3000/${user}/${repo}/${icon}/${color}`
	return (
		<div className="container">
			<div className="row" style={{ backgroundColor: color }}>
				<h1>card</h1>
			</div>
		</div>
	);
}
