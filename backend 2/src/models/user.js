/***** Note: Users Schema *****/
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    // reEnterpassword: {
    //   type: String,
    //   required: true,
    // },
  },
  {
    collection: "user_list",
  }
);

const UserModel = mongoose.model("user_list", userSchema);
module.exports = UserModel;
