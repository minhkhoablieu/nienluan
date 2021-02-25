const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const divisionSchema = new Schema(
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
    //Slug
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

divisionSchema.pre("save", function (next) {
  this.slug = slugify(this.common_name, {
    remove: undefined,
    lower: true,
    strict: false,
    locale: "vi",
  });
  next();
});
module.exports = mongoose.model("divisions", divisionSchema);
