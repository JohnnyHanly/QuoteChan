import React from 'react';
import Funny from './funny';
import Motivation from './motivation';
import Books from './books';
import Thought from './thought';
import { slide as Menu } from 'react-burger-menu'



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
  


    render() {
        return (
        

                    <Menu>
                        <a id="Home" className="menu-item" href="/">Home</a>
                        <a id="Movivational" className="menu-item" href="/">Motivational</a>
                        <a id="Funny" className="menu-item" href="/">Funny</a>
                        <a id="Books" className="menu-item" href="/">Books/Movies</a>
                        <a id="Thought" className="menu-item" href="/">Thought-Provoking</a>
                    </Menu>

               



        );
    }
}


export default Container;