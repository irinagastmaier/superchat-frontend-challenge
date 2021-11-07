import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { searchUser, fetchUserAndRepos } from './actions/actions';
import PickRepo from './components/Repo/PickRepo';
import styles from './styles/App.module.scss';
import { BiSearchAlt } from 'react-icons/bi';
import Navbar from './components/Navbar/Navbar';
import PickIcon from './components/Icons&Color/PickIcon';
import Card from './components/Card/Card';
import Share from './components/Share';
import NotFound from './components/NotFound';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();

	const searchUserData = e => {
		e.preventDefault();
		dispatch(searchUser(searchValue));
		dispatch(fetchUserAndRepos(searchValue));
	};

	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/">
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
					<Route path="/share" component={Share} />
					<Route path="/card/:values" component={Card} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
