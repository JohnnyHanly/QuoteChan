import React from 'react';

class Thought extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isHidden:true
         }
    }


    render() { 
        return ( 
            <h1 className="title">THOUGHT-PROVOKING </h1>
         )
    }
}
 
export default Thought;