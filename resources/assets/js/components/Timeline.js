import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostInput from './PostInput';
import Feed from './Feed';
import FlipMove from 'react-flip-move';

export default class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            showMessage: false,
            messageText: ""
        };

        this.loadFeed = this.loadFeed.bind(this);
        this.onSubmitFinish = this.onSubmitFinish.bind(this);
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
        this.onSubmitFailure = this.onSubmitFailure.bind(this);
    }
    
    componentDidMount() {
        console.log("Timeline component mounted");
    }

    loadFeed() {
        axios.get(dataUrl).then((response) => {
            this.setState({posts: response.data});
        });
    }

    onSubmitFinish() {
        this.loadFeed();
    }

    onSubmitSuccess() {
        this.setState({
            showMessage: true,
            messageText: "Post has been successfully created!" 
        });

        setTimeout(() => {
            this.setState({showMessage: false, messageText: ""});
        }, 3000);
    }

    onSubmitFailure() {
        this.setState({
            showMessage: true,
            messageText: "Failed to create post." 
        });

        setTimeout(() => {
            this.setState({showMessage: false, messageText: ""});
        }, 3000);
    }

    render() {
        const notification = this.state.showMessage ?
            <div key="1" className="notification is-success"> {this.state.messageText} </div> :
            <div key="0"> </div>;

        return (
            <div>
                <h3 className="title is-4"> Post your Status </h3>
                    <div id="post-input"></div>
                    <PostInput
                        onSubmitFinish={this.onSubmitFinish}
                        onSubmitSuccess={this.onSubmitSuccess}
                        onSubmitFailure={this.onSubmitFailure}
                        />

                    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <FlipMove>
                            { notification }
                        </FlipMove>
                    </div>

                    <hr/>

                    <h3 className="title is-4"> Posts </h3>
                    <Feed
                        loadFeed={this.loadFeed}
                        posts={this.state.posts}
                        />
            </div>
        );
    }
}

if (document.getElementById("timeline")) {
    ReactDOM.render(<Timeline/>, document.getElementById("timeline"));
}
