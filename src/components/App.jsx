import React from 'react';
import makeRequest from '../request';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			message: ''
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.submitRequest = this.submitRequest.bind(this);
	}
	handleNameChange(event, option) {
		console.log("NAME:", event.target.value);
		this.setState({name: event.target.value});
	}
	handleMessageChange(event, option) {
		console.log("MESSAGE:", event.target.value);
		this.setState({message: event.target.value});
	}
	submitRequest() {
		var req = this.state;
		console.log("REQUEST:", req);
		makeRequest(req);
	}
	render() {
		var a = 0;
		return (
			<div>
				<span>Name:</span>
				<input className="form-name" onChange={this.handleNameChange} type="text" />
				<span>Message:</span>
				<input className="form-message" onChange={this.handleMessageChange} type="text" />
				<button className="form-submit" onClick={this.submitRequest}>
					Send Message
				</button>
			</div>
		);
	}
}

export default App;