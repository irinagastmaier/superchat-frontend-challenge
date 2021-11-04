import React from 'react';
import { BsTwitter } from 'react-icons/bs';

export default function Share() {
	let values = localStorage.getItem('values');
	values = JSON.parse(values);
	const params = values.toString();
	const url = `https://twitter.com/intent/tweet?text=http://localhost:3000/${params}`;
	const urlToString = url.toString();

	return (
		<div>
			<a className="twitter-share-button" href={urlToString}>
				<BsTwitter className="twitter" onClick={() => localStorage.clear()} />
			</a>
		</div>
	);
}
