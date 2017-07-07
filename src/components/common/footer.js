import React from 'react';
import ReactDom from 'react-dom';
import { Button, Radio, Icon, Menu, Tabs, Form} from 'antd';
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

export default class IndexComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

			categoryItems: [],

		}
	}

	componentDidMount() {
		fetch('/categoryfooter.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				categoryItems:json.data.categories
			})
		})
	}

	handleCategorySelect(event) {
		this.setState ({
			selectKey: [event.key]
		})
	}

    render() {
        return (
        	<div className="css-footer">
        	<div className="css-footerTitle">voa友情链接</div>
			<Menu mode="horizontal" className = "category-menu"  selectedKeys={this.state.selectKey}  onSelect={this.handleCategorySelect.bind(this)}>
				{
					this.state.categoryItems.map((value,index)=>{
						return <MenuItem key = {'category_' + value.category_id}>{value.category_name}</MenuItem>
					})
				}
			</Menu>
        	</div>

		)
    }

}

			 