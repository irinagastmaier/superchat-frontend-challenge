import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { searchUser, fetchUserAndRepos } from './actions/actions';
import Home from './components/Home';
import PickRepo from './components/Repo/PickRepo';
import styles from './styles/App.module.scss';
import { BiSearchAlt } from 'react-icons/bi';
import Navbar from './components/Navbar/Navbar';
import PickIcon from './components/Icons&Color/PickIcon';
import Card from './components/Card';
import Share from './components/Share';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const [isEmpty, setIsEmpty] = useState(false);
	const dispatch = useDispatch();

	const searchUserData = e => {
		e.preventDefault();
		dispatch(searchUser(searchValue));
		dispatch(fetchUserAndRepos(searchValue));
	};

	//onload we are reading,what data we have in localStorage
	useEffect(() => {
		const localData = JSON.parse(localStorage.getItem('values'));
		console.log(localData);
		if (localData === null) {
			setIsEmpty(true);
		}
	}, []);

	const RedirectIsEmpty = ({ component: Component, isEmpty, path, ...rest }) => {
		return (
			<Route
				path={path}
				{...rest}
				render={props => {
					return isEmpty ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: '/',
								state: {
									from: props.location,
								},
							}}
						/>
					);
				}}
			/>
		);
	};

	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home}>
						<div className="container">
							<form onSubmit={searchUserData} className={styles.search}>
								<input
									type="text"
									placeholder="type username"
									onChange={e => setSearchValue(e.target.value)}
									value={searchValue}
									className={styles.value}
								/>
								<button className={styles.isearch} type="submit">
									<BiSearchAlt />
								</button>
							</form>
						</div>
					</Route>
					<Route path="/repos" component={PickRepo} />
					<Route path="/icons" component={PickIcon} />
					<RedirectIsEmpty path="/share" component={Share} isEmpty={isEmpty} />
					<Route path="/:values" component={Card} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
