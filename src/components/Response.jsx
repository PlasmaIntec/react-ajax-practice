import React from 'react';

var Response = (props) => (
	<h1>
		Server Response:	
		<div className="response-field">
			{props.text}
		</div>
	</h1>
);

export default Response;