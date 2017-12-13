import React, { Component } from 'react';

export default class Post extends Component {
    componentDidMount()
    {
        console.log("Post component mounted");
    }

    render() {
        return (
            <div className="card" style={{marginBottom: "20px"}}>
                <header className="card-header">
                    <p className="card-header-title">
                        {this.props.title}
                    </p>

                    <div className="card-header-icon">
                        <span className="icon">
                            <i className="fa fa-angle-down"></i>
                        </span>
                    </div>
                </header>
                <div className="card-content">
                    <div className="content">
                        <p>
                            <small>
                                Posted at <strong> {this.props.time} </strong> by <strong> {this.props.poster} </strong>
                            </small>
                        </p>
                        <p> {this.props.content} </p>
                    </div>
                </div>
            </div>
        );
    }
}
