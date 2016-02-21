teacherList = new Mongo.Collection("teacherlist");
buyersList = new Mongo.Collection("buyerslist");


teacherList.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});

buyersList.allow({
  insert: function(userId, doc){
    return "Anonymous";
  }
})


TargetItem = new SimpleSchema({
  itemname: {
    type: String,
    label: "Item name"
  },
  price: {
    type: Number,
    label: "Price of item"
  },
  website: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      label: "Link to website"
  },
  imageurl: {
      type: String,
      regEx: SimpleSchema.RegEx.Url,
      label: "Item image URL"
  },
});

buyers = new SimpleSchema({
  name: {
    type: String,
    label: "What Are You Buying?"
  },
  amount: {
    type: Number,
    label: "How Much Are You Buying? (Boxes/Packs)",
    max: 30
  },
  teacherID: {
    type: Number,
    label: "ID of teacher donating to",
    autoform:{
      type: "hidden"
    }
  }
  });

List = new SimpleSchema({
  name: {
    type: String,
    label: "Name of School Supply"
  },
  targetitem: {
    type: TargetItem,
    optional: true,
    autoValue: function() {
      if (this.isInsert){
        var name = this.siblingField("name");
        if (name.isSet) {
          var itemName = name.value;
          console.log(itemName);
          Meteor.call('fetchWebsiteFromService', itemName, function(err, respJson) {
    				if(err) {
    					window.alert("Error: " + err.reason);
    					console.log("error occured on receiving data on server. ", err );
    				} else {
    				 Session.set("website_string", "" + respJson.product_composite_response.items[0].data_page_link);
    				  
    				  
    				}
          });
          Meteor.setTimeout(function(){}, 2000);
          Meteor.call('fetchNameFromService', itemName, function(err, respJson) {
    				if(err) {
    					window.alert("Error: " + err.reason);
    					console.log("error occured on receiving data on server. ", err );
    				} else {
    				  Session.set("name_string", "" + respJson.product_composite_response.items[0].online_description.value);
    				  
    				  
    				}
          });
          
          Meteor.setTimeout(function(){}, 2000);
          Meteor.call('fetchPriceFromService', itemName, function(err, respJson) {
    				if(err) {
    					window.alert("Error: " + err.reason);
    					console.log("error occured on receiving data on server. ", err );
    				} else {
    				  Session.set("price", parseFloat(respJson.product_composite_response.items[0].online_price.current_price));
    				 
    				}
          });
          
          Meteor.setTimeout(function(){}, 2000);
          
          Meteor.call('fetchImageURLFromService', itemName, function(err, respJson) {
    				if(err) {
    					window.alert("Error: " + err.reason);
    					console.log("error occured on receiving data on server. ", err );
    				} else {
    				  Session.set("imageurl_string", "" + respJson.product_composite_response.items[0].image.internal_primary_image_url[0]);
    				 
    				}
          });
          Meteor.setTimeout(function(){}, 5000);
          console.log(Session.get("website_string"));
          console.log(Session.get("name_string"));
          console.log(Session.get("price"));
          console.log(Session.get("imageurl_string"));
          
          
           return [{
                    name: Session.get("name_string"),
                    price: Session.get("price"),
                    website: Session.get("website_string"),
                    imageurl: Session.get("imageurl_string")
              }];
        } else {
          this.unset();
        }
      }
    },
    autoform:{
      type: "hidden"
    }
  }
});

teacherList.attachSchema(new SimpleSchema({
  school: {
    type: String,
    label: "School",
    max: 200
  },
  schoolAddress: {
    type: String,
    label: "School Address"
  },
  schoolCity: {
    type: String,
    label: "City"
  },
  schoolState: {
    type: String,
    label: "State"
  },
  schoolZip: {
    type: String,
    label: "Zip Code"
  },
  schoolPhone: {
    type: String,
    label: "School's Phone Number"
  },
  teacherName: {
    type: String,
    label: "Your Name"
  },
  teacherID: {
    type: String,
    label: "Teacher Name",
    autoValue: function(){
      return this.userId
    },
    autoform:{
      type: "hidden"
    }
  },
  List: {
    type: [List]
  }
}));

buyersList.attachSchema(new SimpleSchema({
  buyers: {
    type: [buyers]
  }
}));



