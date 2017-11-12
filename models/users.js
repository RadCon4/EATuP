module.exports = function(sequelize, DataTypes){
  var Users = sequelize.define("Users", {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
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
// converted firstName and lastName to username --- Conrad
// converted userPassword to password --- Conrad