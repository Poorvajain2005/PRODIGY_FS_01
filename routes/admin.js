const express = require('express');
const auth = require('../middleware/auth');
const role = require('../middleware/role');
const router = express.Router();

router.get('/admin', auth, role(['admin']), (req, res) => {
  res.json({ message: 'Admin route works!', user: req.user });
});

module.exports = router;
