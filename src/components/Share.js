import React from 'react';
import { BsTwitter } from 'react-icons/bs';

export default function Share() {
	let values = localStorage.getItem('values');
	values = JSON.parse(values);
	const params = values.toString();
	const url = `https://twitter.com/intent/tweet?text=http://localhost:3000/${params}`;
	const urlToString = url.toString();

	return (
		<div className="container">
			<div className="row">
				<h1 className="title">
					{' '}
					Share your <span className="logo">GitHub Link</span>
				</h1>
				<div className="border bc-black">
					<a className="twitter-share-button" href={urlToString}>
						<BsTwitter className="twitter" />
					</a>
					<p className="tweet">Tweet</p>
				</div>
			</div>
		</div>
	);
}
