import React, { useState } from 'react';
import styles from './Repo.module.scss';

export default function PickRepo() {
	let repos = localStorage.getItem('repos');
	repos = JSON.parse(repos);
	const [selectedRepo, setSelectedRepo] = useState('');
	console.log(selectedRepo);
	const names = [];

	repos.forEach(repo => {
		names.push(
			<label htmlFor={repo.name} className={styles.item}>
				<input
					style={{
						display: 'inline',
						width: '20px',
						height: '20px',
					}}
					type="radio"
					id={repo.name}
					name="repo"
					value={repo.name}
					onClick={() => setSelectedRepo(repo.name)}
				/>
				{repo.name}
			</label>
		);
	});

	return (
		<div className="container">
			<form className={styles.row}>
				<h1 className={styles.title}>Choose Repository</h1>
				{names}
			</form>
		</div>
	);
}
