import React, { Component } from 'react';


class ValidationComponent extends Component {
	render() {

		var value = null

		if (this.props.textLength < 5) {
			value = 'This passwords is too short'
		} else {
			value = 'This passwords\' length is fine'
		}

		return (
			<div>
				<p>{value}</p>
			</div>
		)
	}
}


export default ValidationComponent;
