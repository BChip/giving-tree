teacherList.after.insert(function(userId, doc) {
  FlashMessages.sendSuccess('List Submitted! Redirecting...');
  window.setTimeout(myTimer, 3000);
});

function myTimer() {
  Router.go("/");
}

Template.interface.events({
  "click #login-buttons-logout":function (event){
    Router.go('/');
  }
});
