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
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    });
    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'views', 'index.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err;
          }

          res.end(content);
        }
      );
    } else if (req.url === '/about') {
      fs.readFile(
        path.join(__dirname, 'views', 'about.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err;
          }

          res.end(content);
        }
      );
    } else if (req.url === '/api/users') {
      res.writeHead(200, {
        'Content-Type': 'text/json',
      });

      const users = [
        { name: 'Oleh', age: 28 },
        { name: 'Elena', age: 23 },
      ];

      res.end(JSON.stringify(users));
    }
  } else if (req.method === 'POST') {
    const body = [];
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    });

    req.on('data', (data) => {
      body.push(Buffer.from(data));
    });

    req.on('end', () => {
      const message = body.toString().split('=')[1];

      res.end(`
    <h1>Ваше повідомлення: ${message}</h1>
    `);
    });
  }
});
server.listen(3000, () => {
  console.log('Server is running');
});
