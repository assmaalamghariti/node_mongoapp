const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const connectDb = require('./config/mongodb');
const app = express();

connectDb();
const port = process.env.PORT|| 4545;
//ajout
app.set('view engine', 'ejs');
app.use(express.static('public'));
const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
//ajout


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//ajout
app.get('/', (req, res) => {
  res.render("index", {});
});

app.get('/user/add.html', (req, res) => {
  res.render("user/add"); 
});

app.get('/user/view.html', (req, res) => {
  res.render("user/view"); 
});
app.get('/user/edit.html', (req, res) => {
  res.render("user/edit");
});
app.get('/user/search.html', (req, res) => {
  res.render("user/search");
});

//ajout
app.use('/', require('./routes/route'));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
