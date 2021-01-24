const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hotels4.p.rapidapi.com/locations/search?query=new%20york&locale=en_US",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "add_api_key_here",
		"x-rapidapi-host": "hotels4.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
   var constBody = [...response.suggestions]

	// console.log(response.suggestions.group);

	constBody.forEach(group => {
		console.log(group.group);
		console.log(group.entities);
	  });
});