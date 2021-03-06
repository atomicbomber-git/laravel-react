import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PostInput from './PostInput';
import Feed from './Feed';
import FlipMove from 'react-flip-move';
import classNames from 'classnames';

let Notification = (props) => {
    let cssClasses = classNames("notification", props.status);
    return (<div className={cssClasses}> {props.message} </div>);
}

export default class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            showMessage: false,
            notificationText: "",
            notificationStatus: ""
        };

        this.loadFeed = this.loadFeed.bind(this);
        this.onSubmitFinish = this.onSubmitFinish.bind(this);
        this.onSubmitSuccess = this.onSubmitSuccess.bind(this);
        this.onSubmitFailure = this.onSubmitFailure.bind(this);
        this.createNotification = this.createNotification.bind(this);
    }

    createNotification(text, status, timeout = 3000) {
        this.setState({
            showMessage: true,
            notificationText: text,
            notificationStatus: status
        });

        setTimeout(() => {
            this.setState({showMessage: false, notificationText: ""});
        }, timeout);
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
        this.createNotification("Successfully created post.", "is-success");
    }

    onSubmitFailure() {
        this.createNotification("Failed to create post.", "is-danger");
    }

    render() {
        const notification = this.state.showMessage ?
            <div key="1"> <Notification message={this.state.notificationText} status={this.state.notificationStatus} /> </div> :
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
                        currentUserId={window.currentUserId}
                        />
            </div>
        );
    }
}

if (document.getElementById("timeline")) {
    ReactDOM.render(<Timeline/>, document.getElementById("timeline"));
}
