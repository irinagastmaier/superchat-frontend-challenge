import React, { useState } from 'react';
import styles from './Repo.module.scss';

export default function PickRepo() {
	let repos = localStorage.getItem('repos');
	repos = JSON.parse(repos);
	const [selectedRepo, setSelectedRepo] = useState('');

	const names = [];
	repos.forEach((repo, i) => {
		names.push(
			<label htmlFor={repo.name} className={styles.item} key={i}>
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
					onClick={() => handleRepo(repo.name)}
				/>
				{repo.name}
			</label>
		);
	});
	const handleRepo = name => {
		setSelectedRepo(name);
		localStorage.setItem('repo', JSON.stringify(selectedRepo));
		window.location.href = '/icons';
	};

	return (
		<div className="container">
			<form className={styles.row}>
				<h1 className={styles.title}>Choose Repository</h1>
				{names}
			</form>
		</div>
	);
}
