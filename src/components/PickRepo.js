import React, { useState } from 'react';

export default function PickRepo() {
	let repos = localStorage.getItem('repos');
	repos = JSON.parse(repos);
	const [selectedRepo, setSelectedRepo] = useState('');
    console.log(repos, selectedRepo)

	return (
		<div className="container">
			{repos === undefined ? (
				<>
					<h1>Username incorrect</h1>
				</>
			) : (
				repos &&
				repos.map((repo, i) => {
					<label key={i} htmlFor={repo.name}>
						<input
							style={{
								display: 'inline',
								width: '20px',
								height: '20px',
							}}
							type="radio"
							id={repo.id}
							name="repo"
							value={repo.name}
							onClick={() => setSelectedRepo(repo.name)}
						/>
						{repo.name}
					</label>;
				})
			)}
		</div>
	);
}
