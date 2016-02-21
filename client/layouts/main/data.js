Meteor.subscribe('teacherlist');

Template.home.helpers({
  teacherlist: function() {
    return teacherList.find({});
  }
});

