import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props)
        this.fieldRef = React.createRef()

    }
    focusfield = () => {
        console.log(this.fieldRef.current);
        this.fieldRef.current.focus();
    }
    render() {
        return (
            <div>
                <label>*** Using class Ref method ***</label><br></br>
                <label>Enter Your Name<input type="text" ref={this.fieldRef} />
                </label><br></br>
            </div>
        );
    }
}

export default Input;