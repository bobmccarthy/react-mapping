var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.kitty.get('name')}</td>
				<td>{this.props.kitty.get('type')}</td>
				<td><a href="{this.props.kitty.get('picture')}">Picture Link</a></td>
			</tr>
		);
	}
})
