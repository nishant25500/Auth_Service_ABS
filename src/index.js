const express = require("express");
const app = express();
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");

//rough work
const UserService  =  require('./services/user-services');


const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server Started at ${PORT}`);
    
    const userService = new UserService();
    // const token = userService.createToken({email: 'nishant@admin.com', password: '123456'});
    // console.log("token is: ",token)
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pc2hhbnRAYWRtaW4uY29tIiwicGFzc3dvcmQiOiIxMjM0NTYiLCJpYXQiOjE3MjQwNDc1NjAsImV4cCI6MTcyNDA1MTE2MH0.DqfBRoM9DxBMzqGv5vEn_Stj6jFz9oIzE-Hya0HpVwA";
    // const verifiedUser = userService.verifyToken(token);
    // console.log(verifiedUser);
  });
};

prepareAndStartServer();
