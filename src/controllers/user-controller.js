const UserService = require("../services/user-services");

const userService = new UserService();

const create = async (req, res) => {
  try {
    const response = await userService.create({
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(201).json({
      data: response,
      message: "Successfully created new user",
      err: {},
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Smthng went wrong",
      err: error,
      success: false,
    });
  }
};

module.exports = {
  create,
};
