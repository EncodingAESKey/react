import React from 'react';
import { Row, Col,Menu, Icon, Button, Modal, Tabs, Form, Input, notification, Select} from 'antd';
import LoginComponent from './login.js';
import RegisterComponent from './register.js';
import NavComponent from './nav.js';
const MenuItem = Menu.Item;
const TabPane = Tabs.TabPane;
const FormItem = Form.Item;
const Option = Select.Option;

class IndexComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: false, 
			categoryItems: [],
			showModal: false,
		}
	}

	handleCategorySelect(event) {
		this.setState ({
			selectKey: [event.key]
		})
	}

	componentDidMount() {
		fetch('/category.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.setState({
				selectKey:['category_' + json.data.categories[0].category_id],
				categoryItems:json.data.categories
			})
		})
	}

	handleLoginClick() {
		this.setState({
			showModal: true
		})
	}

	handleCancelClick() {
		this.setState({
			showModal: false
		})
	}

	handleRegisterClick() {
		this.setState({
			showModal: false
		})
	}

	handleLoginSubmit(e) {

    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
       var link = '?username=' + values.username + '&password=' + values.password;
      	fetch('/login.json'+link).then((response)=>{
			return response.json();
		}).then((json)=>{
			if (json.data.login){
				this.setState({
					showModal: false,
					isLogin: true
				})
				try {
					window.localStorage.login = false;
				}catch(e) {

				}
			}else{
				 notification.open({
				    message: '我野比大雄今天要打死在座各位',
				    description: '在我哆啦A梦面前你野比大雄算个毛线'
				  });
			}
		})

      }
  	});
	}

	handleExitClick() {
		this.setState({
			isLogin: false
		})
	}

    render() {

    	const { getFieldDecorator } = this.props.form;

    	var LoginArea;

		if (this.state.isLogin) {
			LoginArea =  <Button type="primary" onClick={this.handleExitClick.bind(this)} className="log-reg-btn" >注销</Button>
		}else {
			LoginArea =  <Button type="primary" onClick={this.handleLoginClick.bind(this)} className="log-reg-btn" >登录/注册</Button>
		}

        return (<div>
        	<div>
			    <Row>
				    <Col span={4}>
				    	<a href="../index.html"><img src = "/imgs/logo.png" className="logo" /></a>
				    </Col>
				    <Col span={15}>
						<Menu mode="horizontal" className = "category-menu" selectedKeys={this.state.selectKey}  onSelect={this.handleCategorySelect.bind(this)}>
							{
								this.state.categoryItems.map((value,index)=>{
									return <MenuItem key = {'category_' + value.category_id} className="css-MenuItem"><Icon type={value.icon} />{value.category_name}</MenuItem>
								})
							}
							</Menu>
				    </Col>
				    <Col span={5}>
				    	{LoginArea}
				    </Col>

					<Modal title="登录/注册" visible={this.state.showModal} footer={null} onCancel = {this.handleCancelClick.bind(this)} maskClosable = {false}>
			        <Tabs defaultActiveKey="login">
					    <TabPane tab="登录" key="login">

						 <Form className = "login-form" onSubmit = {this.handleLoginSubmit.bind(this)}>
					        <LoginComponent />
					      </Form>
					    </TabPane>
					    <TabPane tab="注册" key="register">
							
							 <Form onSubmit={this.handleSubmit}>
					        	<RegisterComponent />
								<Button type="primary" htmlType="submit" size="large" onClick={this.handleRegisterClick.bind(this)}>注册</Button>
					        </Form>

					    </TabPane>

					</Tabs>
			        </Modal>


			    </Row>
			</div>
			<NavComponent />
        	</div>
        )
    }
}
export default Form.create()(IndexComponent);
