import React, {Fragment} from "react";

export default class AreaSelect extends React.Component {
    render() {
        return (
            <Fragment>
                <span className='area-select' onClick={this.props.handleClick}>
                    <b>{this.props.children}</b>
                </span>
                <i className="fas fa-caret-down area-select-arrow" onClick={this.props.handleClick}></i>
            </Fragment>
        );
    }
}