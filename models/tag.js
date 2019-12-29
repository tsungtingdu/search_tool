'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define('Tag', {
    name: DataTypes.STRING
  }, {});
  Tag.associate = function (models) {
    // associations can be defined here
    Tag.belongsToMany(models.Comment, {
      as: 'tags',
      throught: {
        model: models.Tagmap, unique: false
      },
      foreignKey: 'TagId'
    })
  };
  return Tag;
};