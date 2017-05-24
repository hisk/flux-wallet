import React from 'react';
import AddNewItem from './AddNewItem';
import ItemsList from './ItemsList';

class App extends React.Component {
	render() {
		return (
			<div className="container">
				<h1 className="app-title">Flux Wallet</h1>
				<AddNewItem />
				<ItemsList />
			</div>
		);
	}
}

export default App;