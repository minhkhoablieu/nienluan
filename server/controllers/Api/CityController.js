const City = require("../../models/City");
const slugify = require("slugify");

exports.index = async (req, res) => {
  const cities = await City.find();
  res.status(200).json(cities);
};

exports.store = async (req, res) => {
  const name = req.body.name;
  const slug = slugify(name, {
    remove: undefined,
    lower: true,
    strict: false,
    locale: "vi",
  });
  const city = new City({
    name: name,
    slug: slug,
  });
  try {
    const result = await city.save();
    res.status(201).json({
      message: "Thêm thành công",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.destroy = (req, res) => {
  const id = req.params.id;
  City.deleteOne({ _id: id })
    .exec()
    .then(() => {
      res.status(200).json({
        message: "Đã xoá",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
