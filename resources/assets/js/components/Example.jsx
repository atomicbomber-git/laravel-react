import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const dataUrl = window.dataUrl;

class Box extends Component {
    componentDidMount()
    {
        console.log("Data component mounted");
    }

    render() {
        return (
            <div className="box">
               <p> { this.props.children } </p>
            </div>
        );
    }
}

export default class Example extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
        }
    }

    componentDidMount()
    {
        console.log("Example component mounted");

        axios.get(dataUrl).then((response) => {
            this.setState({items: response.data});
        });
    }

    render() {  
        return (
            <div>
                {this.state.items.map((item) => {
                    return <Box key={item.key}> {item.name} </Box>;
                })}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
