module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
  id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    userPassword: {
      type: DataTypes.STRING,
      allowNull: true,
    },


    userCity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },

    userState: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
});

  return User;

};