const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slugify = require("slugify");

const familySchema = new Schema(
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

    // division_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   require: true,
    // },
  },
  { timestamps: true }
);

familySchema.pre("save", function (next) {
  this.slug = slugify(this.common_name, {
    remove: undefined,
    lower: true,
    strict: false,
    locale: "vi",
  });
  next();
});
module.exports = mongoose.model("families", familySchema);
