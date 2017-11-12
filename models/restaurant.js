module.exports = function(sequelize, DataTypes) {
  var Restaurant = sequelize.define("Restaurant", {
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
    lat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    long: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {timestamps: false});

  Restaurant.associate = function(models){
    Restaurant.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Restaurant;
};
