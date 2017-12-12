import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const Navigation = (props) => {
    return(
        <div className="tabs is-large">
            <ul>
                <li> <a> Home </a> </li>
                <li> <a> Profile </a> </li>
                <li> <a> Whatever </a> </li>
                <li>
                    <a> <i className="fa fa-sign-out"></i> Log Out </a>
                </li>
            </ul>
        </div>
    );
}

if (document.getElementById("navigation")) {
    ReactDOM.render(<Navigation/>, document.getElementById("navigation"));
}