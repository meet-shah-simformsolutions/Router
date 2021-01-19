import React, { Component } from 'react';

class ClickCounter extends Component {
    
    render() {
        const {count,increment} = this.props
        return (
            <> {/*fragment*/}
                <button onClick={increment}>Click {count} Times</button><br></br>
            </>
        );
    }
}

export default ClickCounter;