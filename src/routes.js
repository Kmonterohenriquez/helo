import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Add component
import Form from './components/Form/Form';
import Dashboard from './components/Dashboard/Dashboard';
import Auth from './components/Auth/Auth';
import Post from './components/Post/Post';
import NewPost from './components/NewPost/NewPost'

export default (
	<Switch>
		<Route component={Form} path='/form' />
		<Route component={Dashboard} exact path='/' />
		<Route component={Auth} path='/auth' />
		<Route component={Post} path='/post' />
		<Route component={NewPost} path='/new-post' />
	</Switch>
);
