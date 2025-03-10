import { DataTypes, Model, Optional } from "sequelize";
import Enterprise from "./enterprises";
import sequelize from "../database/db";

interface StockAttributes {
    id: number;
    enterpriseId: number;
    name: string;
    unitaryValue: number;
    quantity: number;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  interface StockCreationAttributes extends Optional<StockAttributes, 'id'> {}
  
  class Stock extends Model<StockAttributes, StockCreationAttributes> implements StockAttributes {
    public id!: number;
    public enterpriseId!: number;
    public name!: string;
    public unitaryValue!: number;
    public quantity!: number;
    public description!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
  }
  
  Stock.init(
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
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unitaryValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      description: {
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
      tableName: 'Stock',
    }
  );
  
  // Definindo a associação entre Stock e Enterprise
  Stock.belongsTo(Enterprise, { foreignKey: 'enterpriseId' });
  
  export default Stock;