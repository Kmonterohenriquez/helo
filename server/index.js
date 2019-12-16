require('dotenv').config();
const express = require('express'),
	session = require('express-session'),
	postCtrl = require('./postController'),
	ctrl = require('./controller'),
	massive = require('massive'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = express();
app.use(express.json());


//Set up session 
app.use(session({
	resave: false,
	saveUninitialized: true,
	cookie: {maxAge: 1000 * 60 * 60},
	secret: SESSION_SECRET
}))

//Set up Massive
massive(CONNECTION_STRING).then(db => {
	app.set('db', db);
	console.log('DB connected');
});

// Endpoints
app.post('/api/register', ctrl.register);
app.post('/api/login', ctrl.login);

app.post('/api/posts', postCtrl.newPost);
// app.get('/api/posts', postCtrl.getAllPosts);
// app.get('/api/posts/:id', postCtrl.getUserPosts);

const port = SERVER_PORT;

app.listen(port, () => console.log(`Server running on port ${port}`));
