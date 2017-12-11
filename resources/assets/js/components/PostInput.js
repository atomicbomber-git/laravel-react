import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class PostInput extends Component {
    constructor(props)
    {
        super(props);

        this.defaultInput = {
            title: "",
            content: ""
        };
        
        this.state = {
            isSubmitting: false,
            input: this.defaultInput
        };
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleTitleChange(event)
    {
        this.setState({input: {...this.state.input, title: event.target.value} });
    }

    handleContentChange(event)
    {
        this.setState({input: {...this.state.input, content: event.target.value} });        
    }

    handleFormSubmit(event)
    {
        event.preventDefault()

        this.setState({
            isSubmitting: true,
            input: this.defaultInput
        });

        let done = () => {
            console.log("Done")
            this.props.onSubmitFinish();
            this.setState({isSubmitting: false});
        }

        axios.post(window.postUrl, this.state.input)
            .then((response) => {
                console.log(response.data);
                this.props.onSubmitSuccess();
                done();
            })
            .catch((error) => {
                console.log(error.response.data);
                done();
            })

    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="box">
                    <div className="field">
                        <label htmlFor="title"> Title: </label>
                        <div className="control">
                            <input value={this.state.input.title} disabled={this.state.isSubmitting} onChange={this.handleTitleChange} id="title" type="text" className="input"/>
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="content"> Content: </label>
                        <div className="control">
                            <textarea value={this.state.input.content} disabled={this.state.isSubmitting} onChange={this.handleContentChange} name="content" id="content" className="textarea"></textarea>
                        </div>
                    </div>

                    <div className="field is-grouped is-grouped-right">
                        <div className="control">
                            <button type="submit" className={classNames("button", "is-primary", {"is-loading": this.state.isSubmitting})}>
                                Post Status
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

if (document.getElementById('posts')) {
    ReactDOM.render(<PostInput/>, document.getElementById('post-input'));
}
