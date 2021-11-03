import React from 'react';
import styles from './Navbar.module.scss';
import { BsGithub } from 'react-icons/bs';

export default function Navbar() {
	return (
		<div className={styles.nav}>
			<BsGithub  className={styles.icon}/>
			<h1>GitHub Links</h1>
		</div>
	);
}
