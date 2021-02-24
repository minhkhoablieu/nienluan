const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {
    //Tên việt nam
    common_name: {
      type: String,
      required: true,
      unique: true,
    },
    //Tên khoa học
    scientific_name: {
      type: String,
      required: true,
      unique: true,
    },
    //Tên khác
    order_names: {
      type: Array,
      required: false,
    },
    //Hình ảnh
    images: {
      type: Array,
    required: false,

    },
    //Slug
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("plants", plantSchema);
