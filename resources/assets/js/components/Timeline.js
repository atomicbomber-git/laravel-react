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
            showMessage: false
        };

        this.loadFeed = this.loadFeed.bind(this);
        this.onSubmitFinish = this.onSubmitFinish.bind(this);
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
    }
    
    componentDidMount() {
        console.log("Timeline component mounted");
    }

    loadFeed() {
        console.log("Loading feed...");

        axios.get(dataUrl).then((response) => {
            this.setState({posts: response.data});
        });
    }

    onSubmitFinish() {
        this.loadFeed();
    }

    onSubmitSuccess() {
        this.setState({showMessage: true});

        setTimeout(() => {
            this.setState({showMessage: false});
        }, 5000);
    }

    render() {
        const notification = this.state.showMessage ?
            <div key="1" className="notification is-success"> Your post has been successfully submitted! </div> :
            <div key="0"> </div>;

        return (
            <div>
                <h3 className="title is-4"> Post your Status </h3>
                    <div id="post-input"></div>
                    <PostInput
                        onSubmitFinish={this.onSubmitFinish}
                        onSubmitSuccess={this.onSubmitSuccess}
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
