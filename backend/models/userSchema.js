import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
/*   role: {
    type: String,
    default: ["User"],
  } */
});

// pre hash
userSchema.pre("save", function (next) {
  if (this.isModified("password")) {
    const hashedPassword = bcrypt.hashSync(this.password, 10);
    this.password = hashedPassword;
    console.log("Password hashed on Pre-Save into DB");
  }
  next();
});

const UsersCollection = mongoose.model("users", userSchema)
/* UsersCollection.createIndexes({email: -1}) */
export default UsersCollection
