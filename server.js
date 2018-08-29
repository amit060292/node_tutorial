const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now} : ${req.method} ${req.path}`;
	console.log(log);
	next();
});
// app.use((req, res, next) => {
// 	res.render('maintainance.hbs', {
// 		pageTitle: "We'l be back soon!!",
// 	});
// });

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home Page',
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Unable to handle request',
	});
});

app.listen(port, () => {
	console.log(`server is up on port ${port}`);
});
