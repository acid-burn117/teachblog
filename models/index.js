const Users = require('./User');
const Posts = require('./Post');
const Comments = require('./Comment');

Posts.belongsTo(Users, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Posts.hasMany(Comments, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comments.belongsTo(Users, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  Users,
  Comments,
  Posts
};