import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaGithubAlt } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
import styles from './Icon.module.scss';

export default function PickIcon() {
	const [icon, setIcon] = useState('');
	console.log(icon);
	const handleIconColor = e => {
		e.preventDefault();
	};
	return (
		<div className="container">
			<form className="row" onSubmit={handleIconColor}>
				<h1 className={styles.title}>Choose your favorite Icon and Color</h1>

				<label htmlFor="github" className="item">
					<input type="radio" id="github" name="icon" value="github" onClick={e => setIcon(e.target.value)} />
					<AiFillGithub className={styles.icon} value="github" />
				</label>
				<label htmlFor="github" className="item">
					<input
						type="radio"
						id="github"
						name="icon"
						value="github2"
						onClick={e => setIcon(e.target.value)}
					/>
					<FaGithubAlt className={styles.icon} value="github2" />
				</label>
				<label htmlFor="github" className="item">
					<input
						type="radio"
						id="github"
						name="icon"
						value="github3"
						onClick={e => setIcon(e.target.value)}
					/>
					<RiGithubLine className={styles.icon} value="github3" />
				</label>
			</form>
		</div>
	);
}
