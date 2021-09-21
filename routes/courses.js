const { Router } = require('express');
const router = Router();

router.get('/', (req, res) => {
  res.render('courses', {
    title: 'Курси',
    isAdd: true,
  });
});

module.exports = router;
