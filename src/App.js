import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { socket } from './socket';

import './App.css';

function App() {
	const [state, setState] = useState({
		apiResponse: '',
	});

	useEffect(() => {
		// fetch('http://localhost:9000/testAPI')
		// 	.then((res) => res.text())
		// 	.then((res) => setState({ apiResponse: res }));
	}, []);

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					1 <code>a/App.js</code> and save to reload.
				</p>
				<div className='App-link'>API Response: {state.apiResponse}</div>
			</header>
		</div>
	);
}

export default App;
