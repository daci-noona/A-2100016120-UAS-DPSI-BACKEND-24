// routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const newUser = await User.create({ username, password, role });
  res.status(200).json({ message: 'User registered' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = jwt.sign({ id: user.id,username:user.username,role:user.role }, 'secretkey', { expiresIn: '1h' });
  res.json({ token });
});

module.exports = router;
