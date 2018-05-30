import React from 'react';
import Funny from './funny';
import Motivation from './motivation';
import Books from './books';
import Thought from './thought';
import Input from './input';
import Home from './home';
import { scaleRotate as Menu } from 'react-burger-menu'

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
            hasInitialized: true,
            allPosts: [],
            funnyPosts: [],
            motivationalPosts: [],
            thoughtPosts: [],
            booksPosts: []
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
                return <Motivation masterList={this.state.allPosts}/>

            case "booksVisible":
                return <Books masterList={this.state.allPosts}/>

            case "thoughtVisible":
                return <Thought masterList={this.state.allPosts} />

            case "funnyVisible":
                return <Funny masterList={this.state.allPosts}/>
            case "homeVisible":
                return <Home onAddPost={this.addPost.bind(this)} masterList={this.state.allPosts} />

            case "userSubmitVisible":
                return <Input onAddPost={this.addPost.bind(this)} />

            default:
                <Container />
                break;

        }

    }

    initPosts() {
        var newArray= [];
        newArray.push({
            quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
            author: "Mahatma Ghandi",
            username: "jhanly",
            category: "Thought-provoking",
            votes: 5000,
        },
            {
                quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
                author: "Martin Luther King Jr.",
                username: "evan",
                category: "Motivational",
                votes: 4532,
            },
            {
                quote: "We're coming for ya globalist!",
                author: "Alex Jones",
                username: "jackAttack",
                category: "Funny",
                votes: 3442,
            }

        );

        this.setState({
            allPosts:newArray,
            hasInitialized: false
        })
    }


    booleanChecker() {
        for (let key in this.state) {
            if (this.state[key]) {
                console.log(key);
                return key;
            }
        }

    }

    addPost(post) {
        var newArray = [...this.state.allPosts];
        newArray.push(post);
        this.setState({
            allPosts: newArray
        })

    }
    deletePost(index) {
        var newArray = [...this.state.allPosts];
        newArray.splice(index, 1);
        this.setState({
            allPosts: newArray
        })
    }
   

    render() {
        return (

            <div id="burgerdiv">
                <Menu >
                    <li onClick={() => this.componentSwitcher("homeVisible")} id="Home" className="menu-item clicker">Home</li>
                    <li onClick={() => this.componentSwitcher("motivationVisible")} id="Motivational" className="menu-item clicker" href="/">Motivational</li>
                    <li onClick={() => this.componentSwitcher("funnyVisible")} id="Funny" className="menu-item clicker" href="/">Funny</li>
                    <li onClick={() => this.componentSwitcher("booksVisible")} id="Books" className="menu-item clicker" href="/">Books/Movies</li>
                    <li onClick={() => this.componentSwitcher("thoughtVisible")} id="Thought" className="menu-item clicker" href="/">Thought-Provoking</li>
                    <li onClick={() => this.componentSwitcher("userSubmitVisible")} id="Thought" className="menu-item clicker" href="/">Submit Your Own!</li>
                </Menu>

                <div>
                   
                    {(this.state.hasInitialized ? this.initPosts() : this.flagSwitcher(this.booleanChecker()))}
                </div>
            </div>

        );
    }
}


export default Container;