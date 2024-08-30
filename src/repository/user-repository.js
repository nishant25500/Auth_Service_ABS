const { where } = require("sequelize");
const { User, Role } = require("../models/index");

class UserRepository {
  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log("smthng went wrong in repository layer");
      throw error;
    }
  }

  async destroy(userId) {
    try {
      await User.destroy({
        where: {
          id: userId,
        },
      });
      return true;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }

  async getById(userId) {
    try {
      const user = await User.findByPk(userId, {
        attributes: { exclude: ["password"] },
      });
      return user;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      return user;
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }

  async isAdmin(userId){
    try {
       const user = await User.findByPk(userId);
       const adminRole = await Role.findOne({
        where: {
          name: 'ADMIN'
        }
       })
       return user.hasRoles(adminRole); //sequelize function for many to many association [ref: https://medium.com/@tavilesa12/dealing-with-many-to-many-associations-in-sequelize-bddc34201b80]
    } catch (error) {
      console.log("Smthng went wrong in repository layer");
      throw error;
    }
  }
}

module.exports = UserRepository;
