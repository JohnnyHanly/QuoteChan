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
            dropDownOpen: false
        }
    }


    addPost() {
        this.props.onAddPost(this.state);
        window.alert("pressed");
        this.setState({
            quote: "",
            author: "",
            username: "",
            category: "",
        })
    }


    categoryChooser(categoryString) {
        this.setState({
            category: categoryString
        })
    }

    // popoverTop = (
    //     <Popover id="popover-positioned-top" title="pop">
    //         <strong> test </strong>
    //     </Popover>
    // );

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
                                <span className="caret"> </span>Choose a Category</button>
                            <ul className="dropdown-menu">
                                <li value={this.state.category} onClick={(event) => { this.setState({ category: "motivational" }) }}><a href="#"> Motivational</a></li>
                                <li className="divider"></li>
                                <li value={this.state.category} onClick={(event) => { this.setState({ category: "books/movies" }) }}><a href="#">Funny</a></li>
                                <li className="divider"></li>
                                <li value={this.state.category} onClick={(event) => { this.setState({ category: "thought-provoking" }) }}><a href="#">Thought-Provoking</a></li>
                                <li className="divider"></li>
                                <li value={this.state.category} onClick={(event) => { this.setState({ category: "funny" }) }}><a href="#">Books/Movies</a></li>
                                <li className="divider"></li>
                            </ul>
                        </div>
                        {/* <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
                        <button className='btn btn-dark buttun' onClick={this.addPost.bind(this)}>Submit Your Quote
                                    </button>
                                    </OverlayTrigger> */}

                </div>


            </div>
       
            </div >
           
                

        )
    }
}

export default Input;