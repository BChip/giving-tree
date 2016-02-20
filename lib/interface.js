teacherList = new Mongo.Collection("teacherlist");

teacherList.allow({
    insert: function(userId, doc){
        return !!userId;
    }
});


TargetItem = new SimpleSchema({
  name: {
    type: String
  },
  price: {
    type: String
  }
});

List = new SimpleSchema({
  name: {
    type: String
  },
  amount: {
    type: String
  },
  targetitem: {
    type: TargetItem,
    optional: true,
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

