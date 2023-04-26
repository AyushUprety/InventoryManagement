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
    phone: {
      type: String,
      default: "+977",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { tiemstamps: true } // THis will set created at and updated at automatically
);

const User = mongoose.model("User", UserSchema);
