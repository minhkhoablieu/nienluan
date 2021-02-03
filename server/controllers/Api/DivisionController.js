const Division = require("../../models/Division");
exports.store = async (req, res) => {
  const common_name = req.body.common_name;
  const scientific_name = req.body.scientific_name;
  const slug = req.body.slug;

  const result = await Division.create({
    common_name: common_name,
    scientific_name: scientific_name,
    slug: slug,
  });
  res.json(result);
};
