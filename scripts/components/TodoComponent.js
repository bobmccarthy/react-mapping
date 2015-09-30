var React = require('react');

module.exports = React.createClass({
	render: function() {
		return(
			<h2>
			{this.props.TD.get('description')} - {this.props.TD.get('completed').toString()}
			</h2>	
		)
	}
})
