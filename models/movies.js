module.exports = function(sequelize, DataTypes) {
  var Movies = sequelize.define("Movies", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: false,
      primaryKey: true
    },
    name: DataTypes.STRING
  });

  Movies.associate = function(models) {
    Movies.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Movies;
};
