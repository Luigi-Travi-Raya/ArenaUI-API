import { DataTypes, Model, Optional } from "sequelize";
import Enterprise from "./enterprises";
import Stock from "./stock";
import sequelize from "../database/db";


interface TransactionAttributes {
    id: number;
    enterpriseId: number;
    transactionType: string;
    registerType: string;
    itemId: number;
    quantityItems: number;
    name: string;
    value: number;
    transactionDate: Date;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  interface TransactionCreationAttributes extends Optional<TransactionAttributes, 'id'> {}
  
  class Transaction extends Model<TransactionAttributes, TransactionCreationAttributes> implements TransactionAttributes {
    public id!: number;
    public enterpriseId!: number;
    public transactionType!: string;
    public registerType!: string;
    public itemId!: number;
    public quantityItems!: number;
    public name!: string;
    public value!: number;
    public transactionDate!: Date;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  Transaction.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      enterpriseId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Enterprise,
          key: 'id',
        },
      },
      transactionType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      registerType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: Stock,
          key: 'id',
        },
      },
      quantityItems: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      value: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      transactionDate: {
        type: DataTypes.DATE,
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
      tableName: 'Transactions',
    }
  );
  
  // Definindo as associações
  Transaction.belongsTo(Enterprise, { foreignKey: 'enterpriseId' });
  Transaction.belongsTo(Stock, { foreignKey: 'itemId' });
  
  export default Transaction;