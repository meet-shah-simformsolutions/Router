import React from 'react';

const FrwinputRef = React.forwardRef((props,ref) =>{
    return (
        <>  
        <label>*** Using forwardRef  method ***</label><br></br>
        <label>Enter Your Name</label>
        <input type="text" ref={ref}/>
        </>
    )})


export default FrwinputRef;