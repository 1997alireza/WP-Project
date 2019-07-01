import React from "react";
import Stars from "../stars";
import '../../assets/styles/rest_page.css'

export default class CommentCard extends React.Component {
  render() {
      let rate = (this.props.details.quality + this.props.details.packaging + this.props.details.deliveryTime) / 3;
      let now = (new Date());
      let time_diff = now.getTime() - new Date(this.props.details.created_at).getTime();
      let day_diff = Math.floor(time_diff/1000/60/60/24);
      console.log(day_diff);

      return (
      <div className="comment-card-container">
        <div className="comment-top-info">
          <p>{this.props.details.author}</p>
          <div className="comment-stars-container score-stars">
            <Stars rate={rate}/>
          </div>
        </div>
        <div className="comment-text-container">
          <p className="comment-text">
            <i className="fas fa-quote-right" />
              {this.props.details.text}
          </p>
        </div>
        <div className="comment-footer">
          <p className="">{day_diff} روز قبل</p>
          <p className="">گزارش</p>
        </div>
      </div>
    );
  }
}
