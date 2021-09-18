const user = {
  name: 'Елена',
  age: 25,
};
// module.exports = user; //старий запис експортів
// export default user;

const user2 = {
  // приватний об'єкт
  name: 'Igor',
};

module.exports = {
  user: user,
  sayHello() {
    console.log('Hello');
  },
};
