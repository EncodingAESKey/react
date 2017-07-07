import React from 'react';
import { Row, Col,Menu, Icon, Button, Modal, Tabs, Form, Input, notification, Select} from 'antd';
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

class RegisterComponent extends React.Component {

	

 	render() {
 		const { getFieldDecorator } = this.props.form;
 		return (
 			<div>
 				<FormItem label="E-mail" hasFeedback>
				  {getFieldDecorator('email', {
				   
				  })(
				    <Input />
				  )}
				</FormItem>
				<FormItem label="Password" hasFeedback >
				  {getFieldDecorator('password', {
				    rules: [{
				      required: true, message: 'Please input your password!',
				    }, {
				      validator: this.checkConfirm,
				    }],
				  })(
				    <Input type="password" />
				  )}
				</FormItem>
			</div>
 			)
 	}

 }
 export default Form.create()(RegisterComponent);