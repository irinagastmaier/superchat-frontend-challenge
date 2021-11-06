import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchContributors, fetchRepo } from '../../actions/actions';
import _ from 'lodash';
//icons
import { AiFillGithub, AiOutlineStar } from 'react-icons/ai';
import { FaGithubAlt } from 'react-icons/fa';
import { RiGithubLine } from 'react-icons/ri';
//styles
import styles from './Card.module.scss';

export default function Card() {
	const { values } = useParams();
	const array = values.split(',');
	const color = '#' + array[2];
	const user = array[0];
	const repo = array[1];
	let icon = array[3];

	const dispatch = useDispatch();

	const { data } = useSelector(state => state.repoReducer);
	const dataArray = [data];
	const { loading } = useSelector(state => state.repoReducer);

	const { contributors } = useSelector(state => state.repoReducer);
	const login = _.map(contributors, 'login');
	const chunckedLogin = _.chunk(login, 10);

	useEffect(() => {
		dispatch(fetchRepo(user, repo));
		dispatch(fetchContributors(user, repo));
	}, []);

	const names = [];
	chunckedLogin.map((login, i) => {
		names.push(
			<p key={i} className="w-100 item">
				{login + ''}
			</p>
		);
	});

	if (icon === 'github') {
		icon = <AiFillGithub className={styles.icon} value="github" />;
	} else if (icon === 'github2') {
		icon = <FaGithubAlt className={styles.icon} value="github2" />;
	} else {
		<RiGithubLine className={styles.icon} value="github3" />;
	}

	return (
		<div className="container">
			<div className="row">
				{data === undefined ? (
					<div>Loading... </div>
				) : (
					loading === true &&
					dataArray.map((info, i) => (
						<div key={i} style={{ backgroundColor: color, opacity: '0.8' }} className={styles.container}>
							<h1 className={styles.title}>{info.owner.login}</h1>
							<div className={styles.item}>
								<div className={icon}>{icon}</div>
								<div>
									<h2>{info.name}</h2>
									<p>{info.description}</p>
									<p>
										<AiOutlineStar className={styles.star} />{' '}
										<span className={styles.num}>= {info.stargazers_count}</span>
									</p>
									Contributors: {names}
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}

// a button to star the repository
