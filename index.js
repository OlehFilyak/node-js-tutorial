// console.log('Hello', __dirname); // абсолютний шлях до папки
// console.log('Hello', __filename); // абсолютний шлях, що включає ім'я файлу
// require('./user'); // старий спосіб підключення
// const userObj = require('./user');
// console.log(userObj);
// const user = require('./user');
// user.sayHello(); виклик методу із об'єкту, що в файлі userSelect:

// (function (require, module, exports, __filename, dirname) { // як під капотом працює Node
//   const obj = require('./user')

//   console.log(obj.user)

//   obj.sayHello()
// }) ()

const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url);

  res.write('<h1>Hello from Node.js</h1>');
  res.write('<h2>Hello from Node.js</h2>');
  res.write('<h3>Hello from Node.js</h3>');
  res.end(`
<div style="background-color:red; width=100px; height:50px;">
<h1>Test</h1>
</div>
`);
});

server.listen(3000, () => {
  console.log('Server is running');
});
