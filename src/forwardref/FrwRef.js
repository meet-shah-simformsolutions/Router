import React, { Component } from 'react';
import  FrwinputRef  from "./FrwinputRef";
class FrwRef extends Component {
    constructor(props) {
        super(props);
        this.inputfrwRef = React.createRef();
    }
    handler = () =>{
        this.inputfrwRef.current.focus();
    }
    render() {
        return (
            <div>
                <FrwinputRef ref={this.inputfrwRef}/><br></br>
                <button onClick={this.handler}>Focus</button>
            </div>
        );
    }
}

export default FrwRef;