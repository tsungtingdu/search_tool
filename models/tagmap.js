'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tagmap = sequelize.define('Tagmap', {
    commentId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  Tagmap.associate = function (models) {
    // associations can be defined here
    Tagmap.belongsTo(models.Comment)
    Tagmap.belongsTo(models.Tag)
  };
  return Tagmap;
};