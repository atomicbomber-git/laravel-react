import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Post from './Post';

const dataUrl = window.dataUrl;

export default class Feed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }
    }

    componentDidMount()
    {
        console.log("PostContainer mounted.");

        axios.get(dataUrl).then((response) => {
            this.setState({items: response.data});
        });
    }

    render() {
        return (
            <div>
                {this.state.items.map((item) => {
                    return <Post
                        key={item.id}
                        title={item.title}
                        poster={item.poster}
                        time={item.time}
                        content={item.content}
                        />;
                })}
            </div>
        );
    }
}

if (document.getElementById('posts')) {
    ReactDOM.render(<Feed/>, document.getElementById('posts'));
}
else {
    console.log("No element with posts as id");
}
