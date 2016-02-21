 Meteor.publish('teacherlist', function(){
     return teacherList.find({});
 });
 
  Meteor.publish('buyersList', function(){
     return buyersList.find({});
 });
 
 
 Meteor.methods({
		fetchWebsiteFromService: function(itemName) {
		  var itemName = 13487610;
			var url = "http://api.target.com/products/v3/" + itemName + "?id_type=tcin&key=J5PsS2XGuqCnkdQq0Let6RSfvU7oyPwF";
			//synchronous GET
			var result = Meteor.http.get(url, {timeout:30000});
			if(result.statusCode==200) {
				var respJson = JSON.parse(result.content);
				console.log("response received.");
				return respJson;
			} else {
				console.log("Response issue: ", result.statusCode);
				var errorJson = JSON.parse(result.content);
				throw new Meteor.Error(result.statusCode, errorJson.error);
			}
		},
		fetchNameFromService: function(itemName) {
		  var itemName = 13487610;
			var url = "http://api.target.com/products/v3/" + itemName + "?id_type=tcin&fields=descriptions&key=J5PsS2XGuqCnkdQq0Let6RSfvU7oyPwF";
			//synchronous GET
			var result = Meteor.http.get(url, {timeout:30000});
			if(result.statusCode==200) {
				var respJson = JSON.parse(result.content);
				console.log("response received.");
				return respJson;
			} else {
				console.log("Response issue: ", result.statusCode);
				var errorJson = JSON.parse(result.content);
				throw new Meteor.Error(result.statusCode, errorJson.error);
			}
		},
		fetchPriceFromService: function(itemName) {
			var itemName = 13487610;
			var url = "http://api.target.com/products/v3/" + itemName + "?id_type=tcin&fields=pricing&key=J5PsS2XGuqCnkdQq0Let6RSfvU7oyPwF";
			//synchronous GET
			var result = Meteor.http.get(url, {timeout:30000});
			if(result.statusCode==200) {
				var respJson = JSON.parse(result.content);
				console.log("response received.");
				return respJson;
			} else {
				console.log("Response issue: ", result.statusCode);
				var errorJson = JSON.parse(result.content);
				throw new Meteor.Error(result.statusCode, errorJson.error);
			}
		},
		fetchImageURLFromService: function(itemName) {
			var itemName = 13487610;
			var url = "http://api.target.com/products/v3/" + itemName + "?id_type=tcin&fields=images&key=J5PsS2XGuqCnkdQq0Let6RSfvU7oyPwF";
			//synchronous GET
			var result = Meteor.http.get(url, {timeout:30000});
			if(result.statusCode==200) {
				var respJson = JSON.parse(result.content);
				console.log("response received.");
				return respJson;
			} else {
				console.log("Response issue: ", result.statusCode);
				var errorJson = JSON.parse(result.content);
				throw new Meteor.Error(result.statusCode, errorJson.error);
			}
		}
		
	});