import { Sequelize } from "sequelize";
import db from "../config/database.js";

const User = db.define(
  "users",
  {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    gender: Sequelize.STRING,
    password: Sequelize.STRING,
    refresh_token: Sequelize.TEXT
  },{
    freezeTableName : true,
    createdAt: 'tanggal_dibuat',
    updatedAt: 'tanggal_diubah'
}
);

db.sync().then(() => console.log("Database synced"));

export default User;