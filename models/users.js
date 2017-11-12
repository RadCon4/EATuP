module.exports = function(sequelize, DataTypes){
  var Users = sequelize.define("Users", {
    // timestamps: false,
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userPassword: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {timestamps: false});

  Users.associate = function(models){
    Users.hasMany(models.Restaurant, {
      onDelete: 'cascade'
    });
  };

  return Users;
}
