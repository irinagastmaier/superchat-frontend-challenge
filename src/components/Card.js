import React from 'react';
import { useParams } from 'react-router-dom';

export default function Card() {
	const { values } = useParams();
	console.log(values);
	//`http://localhost:3000/${user}/${repo}/${icon}/${color}`
	return (
		<div>
			<h1>card</h1>
			<h1>{values}</h1>
		</div>
	);
}
