module.exports = function(sequelize, DataTypes){
  var States = sequelize.define('States', {
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 2]
      }
    }
  });
  return States;
}
