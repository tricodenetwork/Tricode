// User Model Creation
const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  // Define user fields here matching the GraphQL schema
  name: { type: String, required: [true, "All fields are required"] },
  password: {
    type: String,
    // required: [false, "All fields are required"],
  },
  email: {
    type: String,
    required: [true, "All fields are required"],
  },
  role: {
    type: String,
    required: [true, "All fields are required"],
  },
  image: {
    type: String,
    required: [true, "All fields are required"],
  },
  active: Boolean,
});

export default mongoose.models.users || mongoose.model("users", userSchema);
