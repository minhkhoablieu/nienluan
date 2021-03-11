const Division = require("../../models/Division");

exports.index = async (req, res) => {
  const divisions = await Division.find();
  res.status(200).json(divisions);
};

exports.store = async (req, res) => {
  const common_name = req.body.common_name;
  const scientific_name = req.body.scientific_name;
  const division = new Division({
    common_name: common_name,
    scientific_name: scientific_name,
  });

  try {
    const result = await division.save();
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
    const result = await Division.deleteOne({ _id: id });
    res.status(200).json({
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
