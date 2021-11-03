import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { searchUser, fetchUserAndRepos } from './actions/actions';

function App() {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();

	const searchUserData = e => {
		e.preventDefault();
		dispatch(searchUser(searchValue));
		dispatch(fetchUserAndRepos(searchValue));
		console.log(searchValue);
	};

	return (
		<Router>
			<div className="App">
				<form onSubmit={searchUserData}>
					<input
						type="text"
						placeholder="type username"
						onChange={e => setSearchValue(e.target.value)}
						value={searchValue}
					/>
					<button className="search" type="submit">
						&#x1F50D;
					</button>
				</form>
				<Switch>
					<Route exact path="/"></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
