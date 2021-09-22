import React from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)

        this.processSearch = this.processSearch.bind(this)

    }

    processSearch(term){
        debugger
        this.props.search(term)
    }


    render(){
        return(
            <div className="footer" >

                <h3>search bar</h3>
                <button onClick={() => this.processSearch("million")}> search</button>
                <h3> What's Trending? </h3>
                <h5>ExplorationAwaits</h5>
                <h5>What's For Dinner?</h5>



            </div>
        )
    }
}

export default Footer