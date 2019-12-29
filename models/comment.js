'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsToMany(models.Tag, {
      as: 'comments',
      throught: {
        model: models.Tagmap, unique: false
      },
      foreignKey: 'CommentId'
    })
  };
  return Comment;
};