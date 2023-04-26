var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter the username"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      minlength: 10,
      maxlength: 50,
    },
    bio: {
      type: String,
      minlength: 10,
      maxlength: 40,
    },
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minlength: 5,
      maxlength: 15,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    hash: String,
    salt: String,
  },
  { tiemstamps: true }
);

const User = mongoose.model("User", UserSchema);
