module.exports = function (sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Post.associate = function (models) {
    Post.belongsTo(models.Movies, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
