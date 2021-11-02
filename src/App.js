import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Search from './components/Search';
import { searchUser, fetchUserAndRepos } from './actions/actions';

function App(...props) {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();

	const searchUserData = e => {
		e.preventDefault();
		dispatch(searchUser(searchValue));
		dispatch(fetchUserAndRepos(searchValue));
		console.log(searchValue);
	};
	//const { currentState, userRepos } = props;
	//const { userData } = currentState;

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
				{/* <Search onSubmit={searchUserData} /> */}
				{/* {currentState.isFetching && <h2>Loading...</h2>}
				{!currentState.isFetching && userData.message && (
					<div>
						<h2>{userData.message}</h2>
					</div>
				)} */}

				<Switch>
					<Route exact path="/"></Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
