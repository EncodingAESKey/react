import React from 'react';
import { Card } from 'antd';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import CarouselComponent from '../common/carouse.js';


class IndexComponent extends React.Component {

	componentDidMount () {
		fetch('/mock/articles.json').then((response)=>{
			return response.json();
		}).then((json)=>{
			this.props.handleGetDataSucc(json.data.articles);
		})
	}

    render() {
        return (
        	 <div className="index-content">
        	 	<Card title={<p className="article-title">体育新闻</p>} style={{ width: 1024 }}>
        	 		<CarouselComponent />
				   {
				   		this.props.articles.map((value, index)=>{
				   			return (
				   				<Link key={index + '_article'} to = {"/detail/" + value.article_id} >
				   				<p className = "article-item">
					   			<span className="article-item-category">{value.article_title}</span>	
					   			<span className="article-content-date">{value.title}{value.date}</span>
					   			<span>{value.is_new?<span>new</span> : ""}</span>
					   			</p>
					   			</Link>
				   				)
				   		})
				    }
				</Card>
        	 </div>
		)
    }
}

function mapStateToProps(store) {
	return {
		articles: store.articles
	}
}

function mapDispatchToProps(dispatch) {
	return{
		handleGetDataSucc: function(articles) {
			var action = {
				type: "FETCH_ARTICLES_SUCC",
				articles: articles
			}
			dispatch(action);
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps )(IndexComponent)