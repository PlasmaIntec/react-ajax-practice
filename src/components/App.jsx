import React from 'react';
import makeRequest from '../request';
import Response from './Response';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			message: '',
			response: ''
		}

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.submitRequest = this.submitRequest.bind(this);
	}
	handleNameChange(event, option) {
		this.setState({name: event.target.value});
	}
	handleMessageChange(event, option) {
		this.setState({message: event.target.value});
	}
	submitRequest() {
		var req = this.state;
		makeRequest(req, (response) => {
			console.log(response.results);
			this.setState({
				response: response
			});
		});
	}
	render() {
		return (
			<div>
				<span>Name:</span>
				<input className="form-name" onChange={this.handleNameChange} type="text" />
				<span>Message:</span>
				<input className="form-message" onChange={this.handleMessageChange} type="text" />
				<button className="form-submit" onClick={this.submitRequest}>
					Send Message
				</button>
				<Response text={this.state.response} />
			</div>
		);
	}
}

export default App;