const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const divisionSchema = new Schema(
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
    //Slug
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);
divisionSchema.pre("save", function (next) {
  this.slug = this.common_name;
  next();
});
module.exports = mongoose.model("divisions", divisionSchema);
