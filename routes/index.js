import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Text mode' });
});

router.get('/express-test', function(req, res, next) {
  res.send({ message: 'Your express up' });
});

export default router;
