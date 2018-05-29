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
            <div className="row">
            <div className="col-md-4 center-block inputForms" id="input">
                <form>
                    <label>Enter the Quote: </label>
                    <input type="text" value={this.state.quote} onChange={(event) => { this.setState({ quote: event.target.value }) }} />
                </form>
                <form>
                    <label>Enter the Autor: </label>
                    <input type="text" value={this.state.author} onChange={(event) => { this.setState({ author: event.target.value }) }} />
                </form>
                <form>
                    <label>Which category does this quote belong to?  </label>
                    <input type="text" value={this.state.category} onChange={(event) => { this.setState({ category: event.target.value }) }} />
                </form>

                <button id="addButton" onClick={this.addPost.bind(this)}>Submit</button>
            </div>
            </div>




        )
    }
}

export default Input;