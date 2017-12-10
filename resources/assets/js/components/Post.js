import React, { Component } from 'react';

export default class Post extends Component {
    componentDidMount()
    {
        console.log("Post component mounted");
    }

    render() {
        return (
            <div className="box">
               <p> { this.props.children } </p>
            </div>
        );
    }
}
