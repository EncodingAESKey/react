import React from "react";
import CommentComponent from "../common/comment.js";
import { BackTop } from 'antd';
import WatchComponent from "./watch.js"

export default class ContentComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			Num: ""
		}
	}

	componentDidMount() {
		var id = this.props.id;
		fetch('article.json?id =' + id).then((response)=>{
            return response.json();
        }).then((json)=>{
            this.setState({
            	title: json.data.title,
            	content: json.data.content,
            	time:json.data.time,
            	mp3: json.data.mp3,
            	count: json.data.count,
            	img: json.data.img,
            	content1: json.data.content1
            })
        })

        if(window.localStorage) {
        	if(window.localStorage.Num){
        		window.localStorage.Num = Number(window.localStorage.Num) + 1;
        		this.state.Num += window.localStorage.Num
        	}else{
        		window.localStorage.Num = 1;
        		this.state.Num = 1;
        	}
        }

    }


	render() {
		return(
			<div>
				
				<h1 className="content-title">{this.state.title}</h1>
				<div className="content-center">
				<span className="content-time">时间:{this.state.time}</span>
				<span className="content-count">浏览次数:{this.state.Num}</span>
				<audio controls src={this.state.mp3} className="content-mp3"></audio>
				</div>
				<div className="article-content">{this.state.content}</div>
				<img src = {this.state.img} className="article-img"/>
				<p className="article-content">{this.state.content1}</p>
				<CommentComponent />
				<BackTop />
			    <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}></strong>
			</div>
			)
	}
}
