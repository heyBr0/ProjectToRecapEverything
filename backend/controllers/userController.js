import UsersCollection from "../models/userSchema.js";

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await UsersCollection.find();
    res.json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const newUser = new UsersCollection(req.body);
    await newUser.save();
    console.log(newUser);
    res.json({ success: true, users: newUser });
  } catch (error) {
    next(error);
  }
};
