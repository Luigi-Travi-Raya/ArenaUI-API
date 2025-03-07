import { Sequelize } from "sequelize";

const sequelize = new Sequelize("arenaui", "root", "",{
    host: 'localhost',
    dialect: "mysql"
});

export default sequelize
