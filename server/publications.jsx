/*Meteor.publish('posts', () => {
  const selector = {category: {$ne: "private"}};
  return Posts.find(selector);
});

Meteor.publish('singlePost', _id => {
  return Posts.find({_id});
});
*/



Meteor.publish('news_list', () => {

    return NewsCollection.find();

});
