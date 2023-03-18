import UsersCollection from "../models/userSchema.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UsersCollection.find();
    res.json({ success: true, data: users });
    console.log(users);
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const newUser = new UsersCollection(req.body);
    await newUser.save();
    res.json({ success: true, data: newUser });
  } catch (error) {
    next(error);
  }
};
