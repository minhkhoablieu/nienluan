const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const citiSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

citiSchema.pre("save", function (next) {
  this.slug = slugify(this.name, {
    remove: undefined,
    lower: true,
    strict: false,
    locale: "vi",
  });
  next();
});

module.exports = mongoose.model("cities", citiSchema);
