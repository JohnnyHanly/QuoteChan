import React from 'react';
import Funny from './funny';
import Motivation from './motivation';
import Books from './books';
import Thought from './thought';



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         }
    }
    render() { 
        return ( 

        <div>
            <h1></h1>
            <Thought />
            <Books />
            <Motivation />
            <Funny />
        </div>
         )
    }
}
 

export default Container;