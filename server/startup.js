 Meteor.publish('teacherlist', function(){
     return teacherList.find({});
 });
 
 Router.map(function () {
  this.route('lists', {
    path: '/lists/:_id'
  });
});