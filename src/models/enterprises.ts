import { DataTypes, Model } from "sequelize";
import sequelize from "../database/db";

class Enterprise extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
    public phone!: string;
    public addressStreet!: string;
    public addressNumber!: string;
    public addressUF!: string;
    public addressCEP!: string;
    public addressComplement!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  Enterprise.init(
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
      addressStreet: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressNumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressUF: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressCEP: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressComplement: {
        type: DataTypes.STRING,
        allowNull: true,
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
      tableName: 'Enterprises',
    }
  );
  
  export default Enterprise;