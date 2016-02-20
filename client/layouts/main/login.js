Accounts.ui.config({
  requestPermissions: {
    facebook: ['user_likes']
  },

  passwordSignupFields: 'USERNAME_AND_EMAIL'
});

//Logout
Template.home.events({
  "click #login-buttons-logout":function (event){
    Router.go('/');
  }
});