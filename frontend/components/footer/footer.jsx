import React from 'react'


class Footer extends React.Component{
    constructor(props){
        super(props)
        this.state={
            searchTerm: ""
        }

        this.processSearch = this.processSearch.bind(this)

    }

    update(field){
   
        return e => {
    
          this.setState({[field]: e.currentTarget.value});
        }
    }

    processSearch(){
        this.props.search(this.state.searchTerm)
    }


    

    render(){
        return(
            <div className="footer" >
                <form onSubmit={this.processSearch}>
                    <input  type="text"
                            placeholder="Search"
                            value={this.state.searchTerm}
                            onChange={this.update('searchTerm')}
                    />
                </form>

                {/* <button onClick={() => this.processSearch("million")}> search</button> */}
                <h3> What's Trending? </h3>
                <h5>ExplorationAwaits</h5>
                <h5>What's For Dinner?</h5>



            </div>
        )
    }
}

export default Footer