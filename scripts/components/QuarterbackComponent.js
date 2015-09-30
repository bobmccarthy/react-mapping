var React = require('react');

module.exports = React.createClass({
	render: function() {
		return (
			<tr>
				<td>{this.props.qbstat.get('name')}</td>
				<td>{this.props.qbstat.get('team')}</td>
				<td>{this.props.qbstat.get('attempts')}</td>
				<td>{this.props.qbstat.get('completions')}</td>
				<td>{this.props.qbstat.get('yards')}</td>
				<td>{this.props.qbstat.get('touchdowns')}</td>
				<td>{this.props.qbstat.get('interceptions')}</td>
				<td>{this.props.qbstat.get('sacks')}</td>
			</tr>
		);
	}
})
