const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantSchema = new Schema(
  {

    common_name: {
      type: String,
      required: true,
      unique: true,
    },

    scientific_name: {
      type: String,
      required: true,
      unique: true,
    },

    order_names: {
      type: Array,
      required: false,
    },

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
