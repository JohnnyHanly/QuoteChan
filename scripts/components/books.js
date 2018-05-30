import React from 'react';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (


            <div id="homepage">
                <h1 className="title"> BOOKS/MOVIES </h1>
                <ul>
                    {
                        this.props.masterList.filter(a => a.category == "Books/movies").map((x, index) => {


                            return (
                                <div className="border" id="post" key={index}>
                                    <div className="cold-md-6">{<p>"{x.quote}"- <i>{x.author}</i></p>}
                                        {<p> Submitted by: <em>{x.username} </em>in <strong>{x.category}</strong></p>}

                                    </div>

                                </div>
                            )

                        })
                    }




                </ul>


            </div>
        )
    }
}

export default Books;