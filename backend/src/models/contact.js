const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    static associate(models) {
      // define associations here if needed
    }
  }

  Contact.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      field: 'id'
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'name'
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      },
      field: 'email'
    },
    subject: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'subject'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'message'
    },
    status: {
      type: DataTypes.ENUM('pending', 'read', 'replied'),
      defaultValue: 'pending',
      field: 'status'
    }
  }, {
    sequelize,
    modelName: 'Contact',
    tableName: 'contacts'
  });

  return Contact;
};
