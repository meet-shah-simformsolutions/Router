import React, { Component } from 'react';
import Input from "./Input"
class FocusInput extends Component {
    constructor(props) {
        super(props);
        this.otherref = React.createRef();
    }
    handler = () => {
        this.otherref.current.focusfield();
    }
    render() {
        return (
            <div>
                <Input ref={this.otherref}/>
                <button onClick={this.handler}>Focus Input</button>
            </div>
        );
    }
}

export default FocusInput;