import React from 'react';
import { useParams } from 'react-router-dom';

export default function Card() {
	const { params } = useParams();
	//`http://localhost:3000/${user}/${repo}/${icon}/${color}`
	return (
		<div>
			<h1>{params}</h1>
		</div>
	);
}
