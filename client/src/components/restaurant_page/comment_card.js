import React from "react";
import Stars from "../stars";
import '../../assets/styles/rest_page.css'

export default class CommentCard extends React.Component {
  render() {
      let rate = 1;
    return (
      <div className="comment-card-container">
        <div className="comment-top-info">
          <p>اکبر</p>
          <div className="comment-stars-container">
            <Stars rate={rate}/>
          </div>
        </div>
        <div className="comment-text-container">
          <p className="comment-text">
            <i className="fas fa-quote-right" />
            با وجود اینکه فاصله‌ی رستوران از ما خیلی کمه، با این دلیوریشون ریدن!
          </p>
        </div>
        <div className="comment-footer">
          <p className="">۸ ماه قبل</p>
          <p className="">گزارش</p>
        </div>
      </div>
    );
  }
}
