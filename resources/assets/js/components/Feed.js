import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import FlipMove from 'react-flip-move';

import Post from './Post';

const dataUrl = window.dataUrl;

export default class Feed extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount()
    {
        this.props.loadFeed();
    }

    render() {
        return (
            <FlipMove enterAnimation="fade">
                {this.props.posts.map((item) => {
                    return <Post
                        key={item.id}
                        title={item.title}
                        poster={item.poster}
                        time={item.time}
                        content={item.content}
                        />;
                })}
            </FlipMove>
        );
    }
}

if (document.getElementById('posts')) {
    ReactDOM.render(<Feed/>, document.getElementById('posts'));
}
