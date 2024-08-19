const UserRepository = require("../repository/user-repository");

class UserService {
  constructor() {
    this.repository = new UserRepository();
  }

  async create(data) {
    try {
      // await this.repository.destroy({
      //   where: {
      //     id: userId,
      //   },
      // });
      // return true;
      const user = await this.repository.create(data);
      return user;
    } catch (error) {
      console.log("smthng went wrong in service layer");
      throw error;
    }
  }
}

module.exports = UserService;
