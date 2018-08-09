import React, { Component } from 'react';


class ValidationComponent extends Component {
	render() {

		var value = null

		if (this.props.textLength < 5) {
			value = 'This word is too short'
		} else {
			value = 'This words\' length is fine'
		}

		return (
			<div>
				<p>{value}</p>
			</div>
		)
	}
}


export default ValidationComponent;
