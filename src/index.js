const express = require("express");
const app = express();
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const bodyParser = require("body-parser");
const db = require('./models/index')
const {User,Role} = require('./models/index');

//rough work


const prepareAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use("/api", apiRoutes);

  app.listen(PORT, async () => {
    console.log(`Server Started at ${PORT}`);

    //MANUAL DB SYNC
    // if(process.env.DB_SYNC){   
    //   db.sequelize.sync({alter: true}) 
    // }

    // const u1 = await User.findByPk(4);
    // // console.log(u1);
    // const r1 = await Role.findByPk(2);
    // // console.log(r1);

    // // await u1.addRole(r1);
    // const response = await u1.getRoles();
    // console.log(response);
    

  });
};

prepareAndStartServer();
