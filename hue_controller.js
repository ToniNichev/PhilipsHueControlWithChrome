
var hue_controller = function() {};

hue_controller.prototype = {

	bridgeURL: "http://10.0.1.3/api/newdeveloper",

	allLightsToggle: function(status) {
		$.ajax(
		  {
		    url: this.bridgeURL + "/groups/0/action",
		    type: "PUT",
		    data: "{\"on\": " + status + "}"
		  }
		  
		).done(function(data) {
		  console.log(data);
		});
	},

	allLightsBri: function(level) {
		$.ajax(
		  {
		    url: this.bridgeURL + "/groups/0/action",
		    type: "PUT",
		    data: "{\"bri\": " + level + "}"
		  }
		  
		).done(function(data) {
		  //console.log(data);
		});
	}	

}

