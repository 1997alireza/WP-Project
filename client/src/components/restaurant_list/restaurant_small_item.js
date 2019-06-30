import React, {Fragment} from 'react';
import conf from '../../config'
import {Link } from "react-router-dom";
import {translate_food} from "../../assets/js/tools";
import Stars from "../stars";

export default class RestaurantItem extends React.Component {
    render() {
        let rate = this.props.details.averageRate;
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
                                    <Stars rate={rate}/>
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