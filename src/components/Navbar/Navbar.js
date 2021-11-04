import React from 'react';
import styles from './Navbar.module.scss';
import { BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<Link to="/" className={styles.link}>
			<div className={styles.nav}>
				<BsGithub className={styles.icon} />
				<h1>GitHub Links</h1>
			</div>
		</Link>
	);
}
