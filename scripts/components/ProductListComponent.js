var React = require('react');
var ProductComponent = require('./ProductComponent');

module.exports = React.createClass({
	render: function() {
		var productRows = this.props.products.map(function(item) {
			return (
					<ProductComponent key={item.get('description')} product={item} />
			);
		});
		return (
			<div className="row">
				<h1>Products</h1>
				<table className="table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Quantity</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{productRows}
					</tbody>
				</table>
			</div>
		);
	}
});