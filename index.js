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
