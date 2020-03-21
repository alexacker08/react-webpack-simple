import React, { Component } from 'react'
import { render } from 'react-dom';

import './styles/main.scss';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Test</h1>
                <p>Hello world!</p>  
                <div className="image-holder"></div>
            </div>
        )
    }
}

render(<App />, document.getElementById('root'));

