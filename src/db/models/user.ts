import {
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  Model,
} from "sequelize";
import sequelize from "./sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare first_name: string;
  declare last_name: string;
  declare email: string;
  declare password: string;
  declare phone_number: string;
  declare role: string;
  declare strike_count: number;
  declare no_show_count: number;
  declare banned_until: Date | null;
  declare created_at: CreationOptional<Date>;
  declare updated_at: CreationOptional<Date>;
}

User.init(
  {
    id: {
      type: "INTEGER",
      autoIncrement: true,
      primaryKey: true,
    },
    first_name: {
      type: "STRING",
      allowNull: false,
    },
    last_name: {
      type: "STRING",
      allowNull: false,
    },
    email: {
      type: "STRING",
      allowNull: false,
      unique: true,
    },
    password: {
      type: "STRING",           
      allowNull: false,
    },
    phone_number: {
      type: "STRING",
      allowNull: false,
    },
    role: {
      type: "STRING",
      allowNull: false,
    },
    strike_count: {
      type: "INTEGER",
      allowNull: false,
      defaultValue: 0,
    },
    no_show_count: {
      type: "INTEGER",
      allowNull: false,
      defaultValue: 0,
    },
    banned_until: {
      type: "DATE",
      defaultValue: new Date(),
    },
    created_at: {
      type: "DATE",
      defaultValue: new Date(),
    },
    updated_at: {
      type: "DATE",
      defaultValue: new Date(),
    },
  },
  {
    tableName: "users",
    sequelize: sequelize,
    underscored: true,
    timestamps: true,
  }
);

export default User;
