import { Sequelize } from "sequelize";

const sequelize = new Sequelize("arenaui", "root", "",{
    host: 'localhost',
    dialect: "mysql",
    logging: false
});

export const DatabaseAuthenticate = async () => {
    try {
        await sequelize.authenticate()
        console.log("DB Connected!")
    } catch (error) {
        console.log("DB Auth Failed: " + error)
    }
}

export default sequelize
