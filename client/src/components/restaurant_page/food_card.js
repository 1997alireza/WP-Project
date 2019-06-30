import React from "react";
import '../../assets/styles/global.css'
import '../../assets/styles/rest_list.css'

export default class FoodCard extends React.Component {
  render() {
    return (
      <div className="food-card">
          <div className="food-card-details-container">
            <div>
              <p className="food-name">پیتزا پپرونی</p>
              <p className="food-price">34,500 تومان</p>
            </div>
            <p className="food-materials">
              سس مارینا، ژامبون گوشت، ژامبون پپرونی، فلفل هالوپینو
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
