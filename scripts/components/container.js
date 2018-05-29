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
            containerVisible: true,
            booksVisible: false,
            funnyVisible: false,
            thoughtVisible: false,
            motivationVisible: false,
            allPosts:[]

        }
    }
    componentSwitcher(boolean) {

        this.setState({
            containerVisible: false,
            booksVisible: false,
            funnyVisible: false,
            thoughtVisible: false,
            motivationVisible: false
        })


        this.setState((prevState) => {

            return {
                [boolean]: !prevState[boolean]
            }
        })

    }

    flagSwitcher(boolean) {
        switch (boolean) {
            case "motivationVisible":
                return <Motivation />

            case "booksVisible":
                return <Books />

            case "thoughtVisible":
                return <Thought />

            case "funnyVisible":
                return <Funny />

            default:
                <Container />
                break;

        }

    }

    booleanChecker() {
        for (let key in this.state) {
            if (this.state[key]) {
                console.log(key);
                return key;
            }
        }

    }

    render() {
        return (
            <div>

                <Menu>
                    <li onClick={() => this.componentSwitcher("containerVisible")} id="Home" className="menu-item">Home</li>
                    <li onClick={() => this.componentSwitcher("motivationVisible")} id="Motivational" className="menu-item" href="/">Motivational</li>
                    <li onClick={() => this.componentSwitcher("funnyVisible")} id="Funny" className="menu-item" href="/">Funny</li>
                    <li onClick={() => this.componentSwitcher("booksVisible")} id="Books" className="menu-item" href="/">Books/Movies</li>
                    <li onClick={() => this.componentSwitcher("thoughtVisible")} id="Thought" className="menu-item" href="/">Thought-Provoking</li>
                </Menu>
                <div>
                    {this.booleanChecker()}
                    {this.flagSwitcher(this.booleanChecker())}

                </div>

                <div>
                {/* <input type="text" id="submit"/> */}

                </div>
                    
     

</div>

        );
    }
}


export default Container;