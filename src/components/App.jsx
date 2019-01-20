class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<input className="form-control" onChange={console.log("CHANGE")} type="text" />
			</div>
		);
	}
}