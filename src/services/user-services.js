const UserRepository = require("../repository/user-repository");
const { PRIVATE_KEY } = require("../config/serverConfig");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async create(data) {
    try {
      const user = await this.userRepository.create(data);
      return user;
    } catch (error) {
      console.log("smthng went wrong in service layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await this.userRepository.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("smthng went wrong in service layer");
      throw error;
    }
  }

  async signIn(email, plainPassword) {
    try {
      // step 1->
      const user = await this.userRepository.getByEmail(email);
      // step 2->
      const passwordMatching = this.checkPassword(plainPassword, user.password);

      if (!passwordMatching) {
        console.log("Password doesn't match");
        throw { error: "Incorrect Password" };
      }

      //step 3->
      const newJWT = this.createToken({ id: user.id, email: user.email });
      return newJWT;
    } catch (error) {
      console.log("Smthng went wrong in checking authentication");
      throw error;
    }
  }

  async isAuthenticated(token) {
    try {
      const response = await this.verifyToken(token);
      if (!response) throw { error: "Invalid token" };
      const user = await this.userRepository.getById(response.id);
      if (!user) {
        throw { error: "User not found" };
      }
      return user.id;
    } catch (error) {
      console.log("Smthng went wrong in sign-in process");
      throw error;
    }
  }

  async isAdmin(userId){
    try {
      const response = await this.userRepository.isAdmin(userId);
      return response;
    } catch (error) {
      console.log("Smthng went wrong in service layer");
      throw error;
    }
  }

  createToken(user) {
    try {
      const token = jwt.sign(user, PRIVATE_KEY, { expiresIn: "1d" });
      return token;
    } catch (error) {
      console.log("Smthng went wrong in creating token in service layer");
      throw error;
    }
  }

  verifyToken(token) {
    try {
      const user = jwt.verify(token, PRIVATE_KEY);
      return user;
    } catch (error) {
      console.log(
        "Smthng went wrong in verifying the token in service layer",
        error
      );
      throw error;
    }
  }

  checkPassword(userInputPlainPassword, encryptedPassword) {
    try {
      return bcrypt.compareSync(userInputPlainPassword, encryptedPassword);
    } catch (error) {
      console.log("Smthng went wrong in password comparison");
      throw error;
    }
  }
}

module.exports = UserService;
