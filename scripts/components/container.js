import React from 'react';
import Funny from './funny';
import Motivation from './motivation';
import Books from './books';
import Thought from './thought';
import Input from './input';
import Home from './home';
import { slide as Menu } from 'react-burger-menu'



class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            homeVisible: true,
            booksVisible: false,
            funnyVisible: false,
            thoughtVisible: false,
            motivationVisible: false,
            userSubmitVisible: false,
            allPosts: []

        }
    }
    componentSwitcher(boolean) {

        this.setState({
            homeVisible: false,
            booksVisible: false,
            funnyVisible: false,
            thoughtVisible: false,
            motivationVisible: false,
            userSubmitVisible: false
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
            case "homeVisible":
                return <Home  masterList={this.state.allPosts} />

            case "userSubmitVisible":
                return <Input  onAddPost={this.addPost.bind(this)} />

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

    addPost(post){
        var newArray= [...this.state.allPosts];
        newArray.push(post);
        this.setState({
            allPosts:newArray
        })

    }
    deletePost(index){
        var newArray=[...this.state.allPosts];
        newArray.splice(index,1);
        this.setState({
            allPosts: newArray
        })
    }

    render() {
        return (
            <div>

                <Menu>
                    <li onClick={() => this.componentSwitcher("homeVisible")} id="Home" className="menu-item">Home</li>
                    <li onClick={() => this.componentSwitcher("motivationVisible")} id="Motivational" className="menu-item" href="/">Motivational</li>
                    <li onClick={() => this.componentSwitcher("funnyVisible")} id="Funny" className="menu-item" href="/">Funny</li>
                    <li onClick={() => this.componentSwitcher("booksVisible")} id="Books" className="menu-item" href="/">Books/Movies</li>
                    <li onClick={() => this.componentSwitcher("thoughtVisible")} id="Thought" className="menu-item" href="/">Thought-Provoking</li>
                    <li onClick={() => this.componentSwitcher("userSubmitVisible")} id="Thought" className="menu-item" href="/">Submit Your Own!</li>


                </Menu>
                
                <div>
                    {this.flagSwitcher(this.booleanChecker())}
                    { 
             
            }
        

                

                </div>



            </div>

        );
    }
}


export default Container;