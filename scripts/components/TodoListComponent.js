var React = require('react');
var TodoComponent = require('./TodoComponent');

module.exports = React.createClass({
	render: function() {
		var todoRow = this.props.todos.map(function(td){
			return(
				<TodoComponent key={td.get('description')} TD={td}/>
			);
		})

		return (
			<div className="row">
				<h1>Todos</h1>
				<hr/>
				{todoRow}
			</div>
		);
	}
});