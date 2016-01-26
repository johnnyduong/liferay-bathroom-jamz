if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
  
	//Login Templates -- DONT REMOVE
	Template.body.helpers({
		firstName: function(){
			var user = Meteor.user(); 
			if (user) {
				return user.services.google.given_name;    
			} 
		},

		profileURL: function() {
			var user = Meteor.user(); 
			if (user) {
				return user.services.google.picture; 
			} 
		}
	});
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
