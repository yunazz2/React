const { DataTypes, Model, Sequelize } = require('sequelize');

class Todo extends Model {
  static initiate(sequelize) {
    Todo.init(
      {
        no: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: true,
          defaultValue: '0'
        },
        reg_date: {
          type: 'TIMESTAMP',
          // defaultValue: 'now()',
        },
        upd_date: {
          type: 'TIMESTAMP',
          // defaultValue: 'now()',
        },
      },
      {
        sequelize,
        modelName: 'Todo',
        tableName: 'todo',
        timestamps: false,      // true ➡ createdAt, updatedAt 컬럼 자동생성
      }
    );
  }

  static associate(db) {
    // Add associations if needed
  }
}

module.exports = Todo;
