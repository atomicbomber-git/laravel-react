import React, { Component } from 'react';

export default class Post extends Component {
    componentDidMount()
    {
        console.log("Post component mounted");
    }

    render() {
        return (
            <div className="box">
               <h3 className="title is-4"> {this.props.title} </h3>
               <p>
                   <small>
                       Posted at <strong> {this.props.time} </strong> by <strong> {this.props.poster} </strong>
                   </small>
               </p>
               <p> {this.props.content} </p>
            </div>
        );
    }
}
