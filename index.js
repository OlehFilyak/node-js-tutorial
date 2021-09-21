const express = require('express');
// const path = require('path');
// const { allowedNodeEnvironmentFlags } = require('process');
const exphbs = require('express-handlebars');
const homeRoutes = require('./routes/home'); // імпортуємо роути
const addRoutes = require('./routes/add');
const coursesRoutes = require('./routes/courses');

const app = express();

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs',
});

app.engine('hbs', hbs.engine); // реєструємо в express, що взагалі є такий движок
app.set('view engine', 'hbs'); // безпосередньо використовуємо
app.set('views', 'views');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', homeRoutes); // реєструємо роути
app.use('/add', addRoutes);
app.use('/courses', coursesRoutes);

// app.get('/', (req, res) => {
//   // res.status(200);
//   // res.sendFile(path.join(__dirname, 'views', 'index.html'));
//   res.render('index', {
//     title: 'Головна сторінка',
//     isHome: true,
//   });
// });

// app.get('/add', (req, res) => {
//   // res.sendFile(path.join(__dirname, 'views', 'about.html'));
//   res.render('add', {
//     title: 'Додати курс',
//     isAdd: true,
//   });
// });

// app.get('/courses', (req, res) => {
//   // res.sendFile(path.join(__dirname, 'views', 'about.html'));
//   res.render('courses', {
//     title: 'Курси',
//     isCourses: true,
//   });
// });

const PORT = process.env.Port || 3000;

app.listen(3000, () => {
  console.log(`Server is running on port: ${PORT}`);
});

console.log(__dirname);
