import React from "react";
import '../assets/styles/global.css'

export default class Stars extends React.Component {
    render() {
        let rate = this.props.rate;
        let stars_element = [];
        for(let i = 0; i < Math.floor(rate); i++){
            stars_element.push(<i className={"fa fa-star full-star"}></i>)
        }
        if(Math.floor(rate) !== rate){
            stars_element.push(<i className="fa fa-star half-star"></i>)
        }
        for(let i = Math.ceil(rate); i < 5; i++){
            stars_element.push(<i className="fa fa-star dark-star"></i>)
        }
        return (
            stars_element
        );
    }
}
