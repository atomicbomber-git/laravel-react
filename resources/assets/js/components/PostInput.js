import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class PostInput extends Component {
    constructor(props)
    {
        super(props);

        this.state = {
            isSubmitting: false,
            input: {title: "", content: ""},
            error: {title: "", content: ""}
        };
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.resetFields = this.resetFields.bind(this);
    }

    handleTitleChange(event)
    {
        this.setState({input: {...this.state.input, title: event.target.value} });
    }

    handleContentChange(event)
    {
        this.setState({input: {...this.state.input, content: event.target.value} });
    }

    resetFields()
    {
        this.setState({
            input: {title: "", content: ""},
            error: {title: "", content: ""}
        });
    }

    handleFormSubmit(event)
    {
        event.preventDefault()
        this.setState({ isSubmitting: true });

        let ajaxDone = () => {
            this.setState({ isSubmitting: false });
            this.props.onSubmitFinish();
        }

        axios.post(window.postUrl, this.state.input)
            .then((response) => {
                this.props.onSubmitSuccess();
                this.resetFields();
                ajaxDone();
            })
            .catch((error) => {
                this.props.onSubmitFailure();
                ajaxDone()
                
                if (!error.response) {
                    /* Network error */
                    return;
                }

                let {data} = error.response;
                let newError = {};
                for (const key in this.state.error) {
                    data.errors.hasOwnProperty(key) ?
                        newError[key] = data.errors[key][0] :
                        newError[key] = ""
                }

                this.setState({ error: {...this.state.error, ...newError} });
            })

    }

    render() {

        let {title, content} = this.state.input;
        let {error} = this.state;

        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="box">
                    <div className="field">
                        <label htmlFor="title"> Title: </label>
                        <div className="control">
                            <input value={title} disabled={this.state.isSubmitting} onChange={this.handleTitleChange} id="title" type="text" className={classNames("input", {"is-danger": error.title})}/>
                            <span className="help is-danger"> {error.title} </span>
                        </div>
                    </div>

                    <div className="field">
                        <label htmlFor="content"> Content: </label>
                        <div className="control">
                            <textarea value={content} disabled={this.state.isSubmitting} onChange={this.handleContentChange} name="content" id="content" className={classNames("textarea", {"is-danger": error.content})}></textarea>
                            <span className="help is-danger"> {error.content} </span>
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
