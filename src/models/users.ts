import { DataTypes, Model, Optional } from "sequelize";
import Enterprise from "./enterprises";
import sequelize from "../database/db";

interface UserAttributes {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    enterpriseId: number;
    isOwner: boolean;
    documentNumber: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}
  
  class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public password!: string;
    public enterpriseId!: number;
    public isOwner!: boolean;
    public documentNumber!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enterpriseId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: Enterprise,
          key: 'id',
        },
      },
      isOwner: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      documentNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize, // Passa a instância do Sequelize
      tableName: 'User',
    }
  );
  
  // Definindo a associação entre User e Enterprise
  User.belongsTo(Enterprise, { foreignKey: 'enterpriseId' });
  
  export default User;