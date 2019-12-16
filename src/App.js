import React from 'react';
import './App.css';
import routes from './routes';
import { withRouter } from 'react-router-dom';

import Nav from './components/Nav/Nav';
function App(props) {
	console.log(props.location.pathname);
	return (
		<div className='App'>
			{props.location.pathname === '/auth' ? (
				<div className=''>{routes}</div>
			) : (
				<>
					<Nav />
					<div className='pages-container'>{routes}</div>
				</>
			)}
		</div>
	);
}

export default withRouter(App);
