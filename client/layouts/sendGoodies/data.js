Meteor.subscribe('buyerslist');

Template.sendGoodies.events({
       'click .btn-primary': function(){
              FlashMessages.sendSuccess('Payment Cleared! Redirecting...');
              window.setTimeout(go, 3000);
       }
});
function go() {
  Router.go("/");
}