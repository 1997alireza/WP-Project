import React, {Fragment} from 'react';
import conf from '../../config'
import {Link } from "react-router-dom";
import {translate_food} from "../../assets/js/tools";

export default class RestaurantItem extends React.Component {
    render() {
        let rate = this.props.details.averageRate;
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
            <Link to={"/restaurant/" + this.props.details._id }>
                <div className="restaurant-small-item">
                    <div className="first-div">
                        <div>
                            <img src={conf.server_adr + this.props.details.logo} alt={this.props.details.name}/>
                        </div>
                        <div className="restaurant-small-item-details-container">
                            <p className="restaurant-item-name">{this.props.details.name}</p>
                            <div className="res-score">
                                <div className="score-stars">
                                    {stars_element}
                                </div>
                                <span className="score-number">{rate}</span>
                            </div>
                            <div>
                                <ul className="res-food-types">
                                    {
                                        this.props.details.categories.map(cat => <li>{translate_food(cat.name)}</li>)
                                    }
                                </ul>
                            </div>
                            <div>
                                <p className="res-shady-address" title={this.props.details.address.addressLine}>
                                    {this.props.details.address.addressLine}
                                </p>
                            </div>
                        </div>
                    </div>
                    {!this.props.closed ?
                        <div className="second-div">
                            <button className="start-order-btn">شروع سفارش</button>
                        </div>
                        :
                        <Fragment></Fragment>
                    }
                </div>
            </Link>
        );
    }
}