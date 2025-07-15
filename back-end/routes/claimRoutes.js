const express = require('express');
const router = express.Router();
const User = require('../models/User');
const History = require('../models/History');

// Claim points for a user
router.post('/', async (req, res) => {
  const { userId } = req.body;

  const randomPoints = Math.floor(Math.random() * 10) + 1; 

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ message: "User not found" });

  user.totalPoints += randomPoints;
  await user.save();

  const history = new History({ userId, pointsClaimed: randomPoints });
  await history.save();

  res.json({ user, randomPoints });
});

// Get leaderboard (sorted users)
router.get('/leaderboard', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  const leaderboard = users.map((user, index) => ({
    rank: index + 1,
    name: user.name,
    totalPoints: user.totalPoints,
  }));
  res.json(leaderboard);
});

// Get claim history
router.get('/history', async (req, res) => {
  const histories = await History.find().populate('userId', 'name').sort({ claimedAt: -1 });
  res.json(histories);
});

module.exports = router;
