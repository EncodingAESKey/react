import React from "react";
import { Button, Input } from 'antd';
export default class CommentComponent extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			items:["可以的铁，","哈登简直帅的不行，杜兰特也很吊","今年的NBA状元简直不要太帅"],
			value:''
		}
	}	

	handleBtnClick() {
		var value = this.state.value;
		this.state.items.push(value);
		this.setState( {
			items:this.state.items
		} )
		try {
			if( window.localStorage ) {
				window.localStorage.Info = this.state.items;
			}
		}catch(e) {

		}
	}

	handleChange(e){
		var value = e.currentTarget.value;
		this.setState( {
			value:value
		})
	}

	render() {
		return(
			<div className="css-comment">
				<Input type="textarea" rows={4} ref="text" onChange={this.handleChange.bind(this)} />
				<Button onClick={this.handleBtnClick.bind(this)}>评论</Button>
				{
					this.state.items.map((value, index)=>{
						return(
							<li key={index} className="css-comment-li">{value}</li>
							)
										
					})
				}
			</div>
			)
	}
} 
