import $ from 'jquery';

var makeRequest = (options, callback) => {
	var results = $.ajax({
		method: 'POST',
		url: 'http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting',
		data: {
			'name': options.name,
			'message': options.message
		},
		success: function(response) {
			console.log(response);
		}
	});
}

export default makeRequest;