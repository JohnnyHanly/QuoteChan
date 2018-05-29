import React from 'react';
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            username: "",
            category: "",
            votes: 0
        }
    }

    addPost(){
        this.props.onAddPost(this.state);
        this.setState({
            quote: "",
            author: "",
            username: "",
            category: "",
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-4'></div>
                    <div className="col-xl-4">
                        <p> Enter Your Quote </p>
                        <input type="text" className='form-control lol' value={this.state.quote} onChange={(event) => { this.setState({ quote: event.target.value }) }} id="submit" />
                        <p>Enter the Author</p>
                        <input type="text" className='form-control' value={this.state.author} onChange={(event) => { this.setState({ author: event.target.value }) }} id="submit" />
                        <p>UserName</p>
                        <input type="text" className='form-control' value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }} id="submit" />
                        <p>Category</p>
                        <input type="text" className='form-control' value={this.state.category} onChange={(event) => { this.setState({ category: event.target.value }) }} id="submit" />
                        <button className='btn btn-dark float-right buttun' onClick={this.addPost.bind(this)}>Submit Your Quote</button>
                    </div>
                    <div className='col-xl-4'></div>
                </div>
            </div>

        )
    }
}

export default Input;