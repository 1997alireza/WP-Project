import React, {Fragment} from 'react';
import '../assets/styles/global.css'
import {Link } from "react-router-dom";

export default () => {
    return (
        <Fragment>
            <div className="header">
                <div className="header-container">
                    <div order="1" className="splitter-container">
                        <div><Link to="/authentication">ورود</Link></div>
                        <span className="splitter"></span>
                        <div><Link to="/authentication">عضویت</Link></div>
                    </div>
                    <div order="2">
                        <a href="#">راهنما</a>
                    </div>
                    <div order="final">
                    </div>
                </div>
            </div>
            <div className="div-splitter"></div>
        </Fragment>
    );
}