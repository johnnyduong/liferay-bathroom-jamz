Music = new Mongo.Collection("music");

if (Meteor.isServer) {
	Meteor.startup(function () {
		var musicObjects = [
			{
				description : "Roll down your windows while driving your pickup",
				id : "PLv9bNxDawPe2N33iKGQZQZE9rmg3xObxo",
				name : "Country",
				votes : 0
			},
			{
				description : "",
				id : "PLv9bNxDawPe1POEqcjGgrS726XslzG1BX",
				name : "K-Pop",
				votes : 0
			},
			{
				description : "",
				id : "PLv9bNxDawPe0hS_qQIFm0T97KQZXUBKQR",
				name : "Disney",
				votes : 0
			},
			{
				description: "",
				id : "PLv9bNxDawPe3nU7E1FR7RFL2mXWA7gj28",
				name : "Techno",
				votes : 0
			},
			{
				description: "",
				id : "PLv9bNxDawPe0ECBZ-2rkFpBjMsi_6QtUp",
				name : "Metal",
				votes : 0
			},
			{
				description: "",
				id : "PLv9bNxDawPe1c-HYINpPqe6MDOKltJ4ze",
				name : "Filmscores",
				votes : 0
			}
		];

		Music.remove({});

		if (Music.find().count() === 0) {
			for (var i = 0; i < musicObjects.length; i++) {
				Music.insert(musicObjects[i]);
			}
		}
	});
}


if (Meteor.isClient) {
	Template.bodyTemplate.helpers({
		score: function () {
			return Music.find({}, {sort: { votes: -1 }});
		}
	});

	Template.bodyTemplate.events({
		'change #genreList' : function(evt) {
			console.log("changed!");

			var selected = $("input[name=genre]:checked").val();
		}
	});
}
