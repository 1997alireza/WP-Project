import React, {Fragment} from 'react';
import '../assets/styles/global.css'

export default () => {
    return (
        <Fragment>
            <div className="header">
                <div className="header-container">
                    <div order="1" className="splitter-container">
                        <div><a href="authentication">ورود</a></div>
                        <span className="splitter"></span>
                        <div><a href="authentication">عضویت</a></div>
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