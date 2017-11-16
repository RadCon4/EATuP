const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  var Restaurants = sequelize.define("Restaurants", {
    restaurantName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    streetAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [5, 5]
      }
    },
    latitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: false
    }
  }, {timestamps: false});

  Restaurants.associate = function(models){
    Restaurants.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Restaurants;
};
