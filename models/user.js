module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    city:DataTypes.STRING
    state:DataTypes.STRING
    avatar:DataTypes.STRING
  });

  return User;
};