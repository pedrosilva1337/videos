import React from "react";
import App from "./App";

class SearchBar extends React.Component {
	state = { term: "" };

	onInputChange = (event) => {
		this.setState({ term: event.target.value });
	};

	onFormSubmit = (event) => {
		event.preventDefault(); //Prevents the page from refreshing when clicking enter

		//TODO: Make sure we call
		//callback from the parent component
	};

	render() {
		return (
			<div className='search-bar ui segment'>
				<form onSubmit={this.onFormSubmit} className='ui form'>
					<div className='field'>
						<label>Video Search</label>
						<input
							type='text'
							value={this.state.term}
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
