import React from "react";
import { Carousel } from 'antd';

export default class CarouselComponent extends React.Component {

	render() {
		return(
			<div>
				<Carousel autoplay>
				    <div><h3><img src="imgs/carousel1.jpg" className="css-carousel"/></h3></div>
				    <div><h3><img src="imgs/carousel2.jpg" className="css-carousel"/></h3></div>
				    <div><h3><img src="imgs/carousel3.jpg" className="css-carousel"/></h3></div>
				    <div><h3><img src="imgs/carousel4.jpg" className="css-carousel"/></h3></div>
				</Carousel>
			</div>
			)
	}
}