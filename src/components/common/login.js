import React from 'react';
import { Row, Col,Menu, Icon, Button, Modal, Tabs, Form, Input, notification, Select} from 'antd';
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

class LoginComponent extends React.Component {


 	render() {
 		const { getFieldDecorator } = this.props.form;
 		return (
 			<div>
 				<FormItem>
		          {getFieldDecorator('userName', {
		            rules: [{ required: true, message: '请输入用户名!' }],
		          })(
		            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
		          )}
		        </FormItem>
		        <FormItem>
		          {getFieldDecorator('password', {
		            rules: [{ required: true, message: '请输入密码!' }],
		          })(
		            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
		          )}
		        </FormItem>
		        <FormItem>
		          
		          <Button type="primary" htmlType="submit" className="login-form-button">
		            登录
		          </Button>
		         
		        </FormItem>
			</div>
 			)
 	}

 }
 export default Form.create()(LoginComponent);