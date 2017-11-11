module.exports = function(sequelize, DataTypes){
  var Users = sequelize.define("Users", {
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
  });

  Users.associate = function(models){
    Users.hasMany(models.Restaurant, {
      onDelete: 'cascade'
    });
  };

  return Users;
}
