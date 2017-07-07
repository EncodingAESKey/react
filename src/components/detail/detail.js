import React from 'react';
import ContentComponent from './content.js';

export default class DetailComponent extends React.Component {

    render() {
        return (
        	<div>
                <ContentComponent id={this.props.params.id}/>
        	</div>
        	)
    }


}
