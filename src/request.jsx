import $ from "jquery";

var makeRequest = (options, callback) => {
	var results = $.ajax({
		method: "POST",
		url: "http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/HRSF110/greeting",
		contentType: "application/json",
		data: JSON.stringify({
			"name": options.name,
			"message": options.message
		}),
		success: function(response) {
			callback(response);
		}
	});
}

export default makeRequest;