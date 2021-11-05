import React, { useState } from 'react';
import styles from './Repo.module.scss';

export default function PickRepo() {
	let repos = localStorage.getItem('repos');
	repos = JSON.parse(repos);
	const [selectedRepo, setSelectedRepo] = useState(null);

	let timer;
	const handleTimer = () => {
		timer = setTimeout(() => {
			window.location.href = '/icons';
		}, 1000);
		return () => clearTimeout(timer);
	};

	const handleRepo = name => {
		setSelectedRepo(name);
		if (selectedRepo !== null) {
			localStorage.setItem('repo', JSON.stringify(selectedRepo));
			handleTimer();
		}
	};

	const names = [];
	repos.forEach((repo, i) => {
		names.push(
			<label htmlFor={repo.name} className="item" key={i}>
				<input
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

	return (
		<div className="container">
			<form className="row">
				<h1 className={styles.title}>Choose Repository</h1>
				{names}
			</form>
		</div>
	);
}
