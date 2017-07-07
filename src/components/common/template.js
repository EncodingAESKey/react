import React from 'react';
import HeaderComponent from './header.js';
import FooterComponent from './footer.js';

 
export default class TemplateComponent extends React.Component {
	render () {
		return (
			<div>
				<HeaderComponent />
				{this.props.children}
				<FooterComponent />
			</div>
			)
	}
}