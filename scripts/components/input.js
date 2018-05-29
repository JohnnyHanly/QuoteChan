import React from 'react';
class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
            username: "",
            votes: 0
        }
    }



    render() {
        return (  
            <div>
                <p> INPUT INPUT INPUT</p>
            <input type="text" id="submit"/>
            </div>
            

        )
    }
}

export default Input;