const City = require("../../models/City");

exports.index = async (req, res) => {
  const cities = await City.find();
  res.status(200).json(cities);
};

exports.store = async (req, res) => {
  const name = req.body.name;
  const city = new City({
    name: name,
  });

  try {
    const result = await city.save();
    res.status(201).json({
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.destroy = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await City.deleteOne({ _id: id });
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
