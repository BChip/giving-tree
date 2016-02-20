/*Template.item.helpers({
  myHelper:function(){
    return teacherList.find(Router.current().route.path(this)).fetch();
  }
});*/

Template.item.events({
  "click #login-buttons-logout":function (event){
    Router.go('/');
  }
});