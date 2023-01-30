const express = require("express");
const bodyParser = require("body-parser");
const { PORT, DB_SYNC } = require("./config/serverConfig");
const ApiRoutes = require("./routes/index");
// const sequelize = require("sequelize");
const db = require('./models/index');

const setupAndStartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use("/api", ApiRoutes);
    if (DB_SYNC) {
        await db.sequelize.sync({ force: true });
    }
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    });
};

setupAndStartServer();
