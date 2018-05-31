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
            hasVoted: false,
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
                return <Motivation  onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} masterList={this.state.allPosts} />

            case "booksVisible":
                return <Books onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} masterList={this.state.allPosts} />

            case "thoughtVisible":
                return <Thought onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} masterList={this.state.allPosts} />

            case "funnyVisible":
                return <Funny onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} masterList={this.state.allPosts} />
            case "homeVisible":
                return <Home onDownVote={this.downVote.bind(this)} onUpVote={this.upVote.bind(this)} onAddPost={this.addPost.bind(this)} masterList={this.state.allPosts} />

            case "userSubmitVisible":
                return <Input onAddPost={this.addPost.bind(this)} />

            default:
                <Container />
                break;

        }

    }

    initPosts() {
        var newArray = [];
        newArray.push({
            quote: "Happiness is when what you think, what you say, and what you do are in harmony.",
            author: "Mahatma Ghandi",
            username: "jhanly",
            category: "Thought-provoking",
            votes: 9001,
            hasVoted:false,
            id: Math.floor((Math.random() * 1000) + 1),

        },
            {
                quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
                author: "Martin Luther King Jr.",
                username: "evan",
                category: "Motivational",
                votes: 8556,
                hasVoted:false,
                id: Math.floor((Math.random() * 1000) + 1),
            },
            {
                quote: "We're coming for ya globalist!",
                author: "Alex Jones",
                username: "jackAttack",
                category: "Funny",
                votes: 8223,
                hasVoted:false,
                id: Math.floor((Math.random() * 1000) + 1),
            },
            {
                quote: "Not all those who wander are lost",
                author: "J. R. R. Tolkien",
                username: "hobbitluvr4eva",
                category: "Books/movies",
                votes: 7242,
                hasVoted:false,
                id: Math.floor((Math.random() * 1000) + 1),
            },
            {
                quote: "It's OK to have all of your eggs in one basket as long as you control what happens to that basket",
                author: "Elon Musk",
                username: "eMuskFan22",
                category: "Motivational",
                votes: 6423,
                hasVoted:false,
                id: Math.floor((Math.random() * 1000) + 1),
            },
            {
                quote: "Boom! headshot!",
                author: "me",
                username: "Xx420noScopexX",
                category: "Funny",
                votes: 4323,
                hasVoted:false,
                id: Math.floor((Math.random() * 1000) + 1)
            },
            {
                quote: "Be kind, for everyone you meet is fighting a hard battle.",
                author: "Plato",
                username: "plato_not_play_dough",
                category: "Thought-provoking",
                votes: 2334,
                hasVoted:false,
                id: Math.floor((Math.random() * 1000) + 1)
            }

        );

        this.setState({
            allPosts: newArray,
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
        //post.id =
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


    upVote(id) {


        var newArray = [...this.state.allPosts];
        var object = newArray.find(x => x.id == id);

        if(!object.hasVoted){
            object.votes++;
            object.hasVoted=true; 
        }
        this.setState({
            allPosts: newArray,  
        })
    }

    downVote(id) {

        var newArray = [...this.state.allPosts];
        var object = newArray.find(x => x.id == id);
        if(object.hasVoted){
            object.votes--;
            object.hasVoted=false;
        }
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