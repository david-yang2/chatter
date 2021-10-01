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
        .then(this.setState({searchTerm: ""}))
    }

    render(){
        return(
            <div className="footer" >
                <form onSubmit={this.processSearch}>
                    <input  type="text"
                            placeholder="Search Chatter"
                            value={this.state.searchTerm}
                            onChange={this.update('searchTerm')}
                    />
                </form>

                {/* <button onClick={() => this.processSearch("million")}> search</button> */}
                <h3> What's Trending? </h3>
                <div className="project">
                    <h4>ExplorationAwaits</h4>
                    <p>A full-stack web applicaiton which provides many capable and comfortable overland vehicles that can take you and your family/friends off the beaten path.</p>
                    <a href="https://explorationawaits.herokuapp.com/" class="image" target="_blank" rel="noopener noreferrer"><img width="100%" src={"/explorationawaits.png"} alt="" /></a>
                </div>

                <div className="project">
                    <h4>What's For Dinner?</h4>
                    <p> A full-stack web application which offers a catalog of chefs and items for users to choose from.</p>
                    <a href="https://explorationawaits.herokuapp.com/" class="image" target="_blank" rel="noopener noreferrer"><img width="100%" src={"/whatsfordinner.png"} alt="" /></a>
                    
                </div>



            </div>
        )
    }
}

export default Footer