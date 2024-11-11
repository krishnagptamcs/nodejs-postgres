import {
  createUserService,
  deleteUserService,
  getAllUserService,
  getUserByIdService,
  updateUserService,
} from "../model/userModel.js";

const handelResponse = (res, status, message, data = null) => {
  res.status(status).json({
    status,
    message,
    data,
  });
};

//CREATE USER HANDLER
export const createUser = async (req, res, next) => {
  //extarcting name and email from body
  const { name, email } = req.body;

  try {
    //creating user to table users ,
    const newUser = await createUserService(name, email);
    handelResponse(res, 201, "User created Succesfully", newUser);
  } catch (err) {
    next(err);
  }
};

//GET ALL USERS
export const getAllUsers = async (req, res, next) => {
  try {
    //creating user to table users ,
    const users = await getAllUserService();
    handelResponse(res, 200, "User fetched Succesfully", users);
  } catch (err) {
    next(err);
  }
};

//GET USER BY ID
export const getUserById = async (req, res, next) => {
  try {
    //creating user to table users ,
    //extracting the user id from the params
    const user = await getUserByIdService(req.param.id);
    //If user not found in databse , then retun an error
    if (!user) return handelResponse(res, 404, "User not found");
    handelResponse(res, 200, "User fetched Succesfully", user);
  } catch (err) {
    next(err);
  }
};

//UPDATE ISER BY ID
export const updateUser = async (req, res, next) => {
  //Extracting id from the body
  const { name, email } = req.body;
  try {
    // finding the user which to be update by id  ,
    const updatedUser = await updateUserService(req.param.id, name, email);
    //If user not found in databse , then retun an error
    if (!updatedUser) return handelResponse(res, 404, "User not found");
    handelResponse(res, 200, "User Updated Succesfully", updatedUser);
  } catch (err) {
    next(err);
  }
};

//UPDATE ISER BY ID
export const deleteUser = async (req, res, next) => {
  try {
    // finding the user which to be update by id  ,
    const deletedUser = await deleteUserService(req.param.id);
    //If user not found in databse , then retun an error
    if (!deletedUser) return handelResponse(res, 404, "User not found");
    handelResponse(res, 200, "User deleted Succesfully", deletedUser);
  } catch (err) {
    next(err);
  }
};
