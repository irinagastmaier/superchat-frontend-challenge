import React, { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaGithubAlt } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
import styles from './Icon.module.scss';
import ColorPicker from './ColorPicker';

export default function PickIcon() {
	const [icon, setIcon] = useState('');
	const [color, setColor] = useState('#b3e0e5');

	const handleColor = e => {
		setColor(e.target.value);
	};

	const handleIconColor = e => {
		e.preventDefault();
		const cor = color.substring(1);
		console.log(cor)
		const values = [cor, icon];
		console.log(values);
		localStorage.setItem('values', JSON.stringify(values));
		window.location.href = '/share';
	};

	return (
		<div className="container">
			<form className="row d-center" onSubmit={handleIconColor}>
				<h1 className={styles.title}>Choose your favorite Icon and Color</h1>
				<div className="border">
					<label htmlFor="github" className="item">
						<input
							type="radio"
							id="github"
							name="icon"
							value="github"
							onClick={e => setIcon(e.target.value)}
						/>
						<AiFillGithub className={styles.icon} value="github" />
					</label>
					<label htmlFor="github2" className="item">
						<input
							type="radio"
							id="github2"
							name="icon"
							value="github2"
							onClick={e => setIcon(e.target.value)}
						/>
						<FaGithubAlt className={styles.icon} value="github2" />
					</label>
					<label htmlFor="github3" className="item">
						<input
							type="radio"
							id="github3"
							name="icon"
							value="github3"
							onClick={e => setIcon(e.target.value)}
						/>
						<RiGithubLine className={styles.icon} value="github3" />
					</label>

					<ColorPicker onChange={handleColor} value={color} />
				</div>
				<div className="w-100">
					<button type="submit" className={styles.btn}>
						Next
					</button>
				</div>
			</form>
		</div>
	);
}
