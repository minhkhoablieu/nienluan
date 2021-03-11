const Family = require("../../models/Family");

exports.index = async (req, res) => {
  const families = await Family.find();
  res.status(200).json(families);
};

exports.store = async (req, res) => {
  const common_name = req.body.common_name;
  const scientific_name = req.body.scientific_name;
  const division_id = req.body.division_id;
  const family = new Family({
    common_name: common_name,
    scientific_name: scientific_name,
    division_i: division_id,
  });

  try {
    const result = await family.save();
    res.status(201).json({
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
