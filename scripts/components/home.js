import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div id="homepage">
                <h1 className="title"> HOME PAGE </h1>
                <ul>
                    {
                        this.props.masterList.map((x, index) => {

                            return (
                                <div className="border" id="post" key={index}>
                                    <div className="cold-md-6">{<p>"{x.quote}"- <i>{x.author}</i></p>}
                                        {<p> Submitted by: {x.username} in {x.category}</p>}

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



export default Home;