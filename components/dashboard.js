/*
*	Author: Luís A. Bastião Silva <luis.kop@gmail.com>
*	===========================================================================
*/

import React from 'react';

class Dashboard extends React.Component {
	render(){
		let sections = [];
		let data = this.props.data;
		data.forEach(function(product){
			if (product.name.indexOf(this.props.filterText) === -1) {
				return;
			}
			sections.push(<Section data={product} />);
		}.bind(this))
		return(
			<div>{sections}</div>
		);
	}
}
