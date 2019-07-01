import React from "react";
import '../../assets/styles/global.css'
import '../../assets/styles/rest_list.css'

export default class FoodCard extends React.Component {
    render() {
        let desc = <br/>;
        if(this.props.description.length !== 0)
            desc = this.props.description;
    return (
      <div className="food-card">
          <div className="food-card-details-container">
            <div>
              <p className="food-name">{this.props.name}</p>
              <p className="food-price">{this.props.price} تومان</p>
            </div>
            <p className="food-materials">
                {desc}
            </p>
          </div>
        <div className="add-cart-button-container">
          <button className="add-cart-button">
            + افزودن به سبد خرید
          </button>
        </div>
      </div>
    );
  }
}
