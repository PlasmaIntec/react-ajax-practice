import $ from "jquery";

var makeRequest = (options, callback) => {
	var url = "http://ec2-13-57-25-101.us-west-1.compute.amazonaws.com:3000/api/hrsf110/greeting";
	var data = {
		"name": options.name,
		"message": options.message
	};
	fetch(url, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		}, 
		body: JSON.stringify(data)
	})
	.then((res) => res.text())
	.then((data) => {
		callback(data);
	})
}

export default makeRequest;