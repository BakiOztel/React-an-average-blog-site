import React from "react";
import "./Css/Carousel.css";
import { Carousel, Button } from 'antd';

const CarouselComp = () => {

    return (
        <Carousel autoplay  >
            <div>
                <div className="carousel-img">
                    <img src="/img/1.png" alt="" />
                    <div className="carousel-img-top">
                        <h1>Share your passions in your own way </h1>
                        <Button className="carousel-button" href="/signup" type="primary" shape="round" style={{ width: "150px", height: "50px", "textAlign": "center" }}>
                            <span style={{ display: "inlineBlock", "verticalAlign": "middle", "lineHeight": "50px" }}>Start Build Blog</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <div className="carousel-img">
                    <img src="/img/2.jpg" alt="" />
                    <div className="carousel-img-top">
                        <h1>Reach more people by creating a block </h1>
                        <Button className="carousel-button" href="/signup" type="primary" shape="round" style={{ width: "150px", height: "50px", "textAlign": "center" }}>
                            <span style={{ display: "inlineBlock", "verticalAlign": "middle", "lineHeight": "50px" }}>Start Build Blog</span>
                        </Button>
                    </div>
                </div>
            </div>
            <div>
                <div className="carousel-img">
                    <img src="/img/3.jpg" alt="" />
                    <div className="carousel-img-top">
                        <h1>Share your passions in your own way </h1>
                        <Button className="carousel-button" href="/signup" type="primary" shape="round" style={{ width: "150px", height: "50px", "textAlign": "center" }}>
                            <span style={{ display: "inlineBlock", "verticalAlign": "middle", "lineHeight": "50px" }}>Start Build Blog</span>
                        </Button>
                    </div>
                </div>
            </div>
        </Carousel>
    );
}
export default CarouselComp
