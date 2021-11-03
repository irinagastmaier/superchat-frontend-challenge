const Search = ({ searchUserData, searchValue, setSearchValue, placeholder }) => {
	return (
		<div>
			<form onSubmit={searchUserData}>
				<input
					type="text"
					placeholder={placeholder}
					onChange={e => setSearchValue(e.target.value)}
					value={searchValue}
				/>
				<button className="search" type="submit">
					&#x1F50D;
				</button>
			</form>
		</div>
	);
};

export default Search;
