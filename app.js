
// updateGenre = function(old, new) {

// }


Music = new Mongo.Collection("music");
CurrentSelection = new Mongo.Collection("current");
// Music.remove({});

  CurrentSelection.insert({
  	old : "",
  	newSelection : ""
  })

  Music.insert({
  	country : {
  		id : 0,
  		votes : 0,
  		description : "Roll down your windows while driving your pickup"
  	},
  	kpop : {
  		id : 0,
  		votes : 0,
  		description : ""
  	},
  	disney : {
  		id : 0,
  		votes : 0,
  		description : ""
  	},
  	techno: {
  		id : 4,
  		votes : 0,
  		description: ""
  	},
  	metal: {
  		id : 4,
  		votes : 0,
  		description: ""
  	},
  	soundtrack: {
  		id : 4,
  		votes : 0,
  		description: ""
  	}


  })



if (Meteor.isClient) {

  



Template.nextUp.helpers({
	score: function () {

      return Music.find();
    }
})




  Template.hello.events({
    'change #genreList' : function(evt) {
    	console.log("changed!");

    	var selected = $("input[name=genre]:checked").val();

    	CurrentSelection.update(old)
    	console.log(selected);

   
  		
    }
  })

  



}
