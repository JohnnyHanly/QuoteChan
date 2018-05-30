import React from 'react';
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            username: "",
            category: "",
            votes: 0,
            dropDownOpen: false,
            buttonText: "Choose a category"

        }
    }


    addPost() {
        this.props.onAddPost(this.state);
        this.setState({
            quote: "",
            author: "",
            username: "",
            category: "",
        })
    }

    validForms(){

        
    }

    render() {
        return (

            <div className='container'>
                <h1 className="title"> Submit your own quote! </h1>
                <div className='row'>
                    <div className='col-xl-4'></div>
                    <div className="col-xl-4">
                        <p> Enter Your Quote </p>
                        <input type="text" className='form-control lol' value={this.state.quote} onChange={(event) => { this.setState({ quote: event.target.value }) }} id="submit" />
                        <p>Enter the Author</p>
                        <input type="text" className='form-control' value={this.state.author} onChange={(event) => { this.setState({ author: event.target.value }) }} id="submit" />
                        <p>Enter your Username</p>
                        <input type="text" className='form-control' value={this.state.username} onChange={(event) => { this.setState({ username: event.target.value }) }} id="submit" />

                        <div className="dropdown">
                            <button className="dropdown-toggle buttun btn btn-primary" type="button" data-toggle="dropdown">
                                <span className="caret"> </span>{this.state.buttonText}</button>
                            <ul className="dropdown-menu">
                                <li value={this.state.category} onClick={(event) => { this.setState({ buttonText: "Motivational" }); this.setState({ category: "Motivational" }) }}><a href="#"> Motivational</a></li>
                                <li className="divider"></li>
                                <li value={this.state.category} onClick={(event) => { this.setState({ buttonText: "Funny" }); this.setState({ category: "Funny" }) }}><a href="#">Funny</a></li>
                                <li className="divider"></li>
                                <li value={this.state.category} onClick={(event) => { this.setState({ buttonText: "Thought-provoking" }); this.setState({ category: "Thought-provoking" }) }}><a href="#">Thought-Provoking</a></li>
                                <li className="divider"></li>
                                <li value={this.state.category} onClick={(event) => { this.setState({ buttonText: "Books/movies" }); this.setState({ category: "Books/movies" }) }}><a href="#">Books/Movies</a></li>
                                <li className="divider"></li>
                            </ul>
                        </div>

                        <button className='btn btn-dark buttun' data-toggle="modal" data-target="#submitModal" onClick={this.addPost.bind(this)}>Submit Your Quote
                                    </button>

                        <div className="modal fade" id="submitModal" tabIndex="1" role="dialog" aria-lablelledby="modalLable" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="modelLabel"> Quote submitted to:
                                         {" "+this.state.buttonText}</h5>
                                        <button className="btn btn-primary btn-success" data-dismiss="modal">
                                        
                                         Super!</button>






                                    </div>


                                </div>


                            </div>

                        </div >


                    </div>
                </div>
            </div>
        )
    }
}

export default Input;