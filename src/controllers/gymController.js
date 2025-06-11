const Gym = require('../models/Gym');

// Cria uma academia 
const createGym = async (req, res) => {
  const { name } = req.body;
  const gym = await Gym.create({ name, createdBy: req.userId });
  res.status(201).json(gym);
};

// Lista todas as academias
const listGyms = async (req, res) => {
  const gyms = await Gym.find();
  res.json(gyms);
};

module.exports = { createGym, listGyms };