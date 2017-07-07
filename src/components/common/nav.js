import React from 'react';
import { Row, Col } from 'antd';

export default class NavComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			categoryItems: [],
			categoryItems2: [],
			categoryItems3: [],
			categoryItems4: []
		}
	}

	componentDidMount() {
		fetch('./mock/categoryheader.json').then((response)=>{
			return response.json();
		}).then((json) => {
			this.setState({
				categoryItems: json.data.categorie1,
				categoryItems2: json.data.categorie2,
				categoryItems3: json.data.categorie3,
				categoryItems4: json.data.categorie4
			})
		})
	}

	render() {
		return (
			<div className="css-nav">
				 <Row>
				    <Col span={6} className="css-col">{
				    	this.state.categoryItems.map((value, index) => {
				    		return (
				    			<li key={index + value.categorie_id} className="css-header-nav">{value.title}</li>
				    			)
				    	})
				    }</Col>
				    <Col span={6} className="css-col">{
				    	this.state.categoryItems2.map((value, index) => {
				    		return (
				    			<li key={index + value.categorie_id} className="css-header-nav">{value.title}</li>
				    			)
				    	})
				    }</Col>
				    <Col span={6} className="css-col">{
				    	this.state.categoryItems3.map((value, index) => {
				    		return (
				    			<li key={index + value.categorie_id} className="css-header-nav">{value.title}</li>
				    			)
				    	})
				    }
				    </Col>
				    <Col span={6} className="css-col">{
				    	this.state.categoryItems4.map((value, index) => {
				    		return (
				    			<li key={index + value.categorie_id} className="css-header-nav">{value.title}</li>
				    			)
				    	})
				    }</Col>
				</Row>
			</div>
			)
	}
}