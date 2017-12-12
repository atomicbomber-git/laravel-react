import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <nav className="navbar">
                <div className="navbar-menu">
                    <div className="navbar-start"></div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <form method="POST" action={window.logoutUrl}>
                                <input name="_token" value={window.csrfToken} type="hidden"/>
                                <button className="button is-danger">
                                    <i className="fa fa-sign-out"></i>
                                    Sign Out
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

if (document.getElementById("navigation")) {
    ReactDOM.render(<Navigation/>, document.getElementById("navigation"));
}