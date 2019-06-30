import React from "react";
import { Line } from "rc-progress";
import '../../assets/styles/rest_page.css'

export default class CommentAverageItem extends React.Component {
    render() {
        let rate = this.props.rate;
        return (
            <div className="comment-average-item">
                <div className="comment-average-item-name">
                    <p>{this.props.title}</p>
                </div>
                <div className="comment-average-item-bar">
                    <Line
                        percent={rate}
                        strokeWidth="2"
                        strokeColor="#ffc430"
                    />
                </div>
            </div>
        );
    }
}
