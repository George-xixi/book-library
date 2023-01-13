const { Reader } = require('../models')

const createReader = async (req, res) => {
  const newReader = await Reader.create(req.body);
  try {
    res.status(201).json(newReader);
  } catch (error) {
    res.status(500).console.log(error);
  }
};

module.exports = createReader;
