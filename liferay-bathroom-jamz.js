if (Meteor.isClient) {
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
