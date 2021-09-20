const express = require('express');
// const path = require('path');
const exphbs = require('express-handlebars');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine); // реєструємо в express, що взагалі є такий движок
app.set('view engine', 'hbs'); // безпосередньо використовуємо
app.set('views', 'views');

app.get('/', (req, res) => {
  // res.status(200);
  // res.sendFile(path.join(__dirname, 'views', 'index.html'));
  res.render('index');
});

app.get('/about', (req, res) => {
  // res.sendFile(path.join(__dirname, 'views', 'about.html'));
  res.render('about');
});

const PORT = process.env.Port || 3000;

app.listen(3000, () => {
  console.log(`Server is running on port: ${PORT}`);
});

console.log(__dirname);
