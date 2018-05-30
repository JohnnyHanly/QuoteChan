import React from 'react';

class Thought extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            isHidden:true
         }
    }


    render() { 
        return (

           
            <div id="homepage">
                <h1 className="title"> FUNNY </h1>
                <ul>
                    {
                        this.props.masterList.filter(a=> a.category=="Thought-provoking").map((x, index) => {
                            

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
 
export default Thought;