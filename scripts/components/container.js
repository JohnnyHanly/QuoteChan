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
            containerVisible:true,
            booksVisible:false,
            funnyVisible:false,
            thoughtVisible:false,
            motivationVisible:false

        }
    }
  
     toggleHidden(toggle){
         this.setState({
             toggle:!toggle
             
         })
     }

    render() {
        return (
            <div>
        
                    <Menu>
                        <a id="Home" className="menu-item">Home</a>
                        <a onClick={this.toggleHidden.bind(this.state.motivationHidden)}id="Motivational" className="menu-item" href="/">Motivational</a>
                        <a id="Funny" className="menu-item" href="/">Funny</a>
                        <a id="Books" className="menu-item" href="/">Books/Movies</a>
                        <a id="Thought" className="menu-item" href="/">Thought-Provoking</a>
                    </Menu>
                    
                     <div>
                     {
                    




                     } 
                     


                        </div>  
                   


            </div>
            
            

        );
    }
}


export default Container;