import React, { Component } from 'react'
import "./repoDivCard.css"

class RepoDivCard extends Component {
    render() {
        let {Username, Repo} =this.props;
        return (
            
            <>
                <a href={"https://github.com/"+ Username +"/"+ Repo}>
                     <img className="projimage" src={"https://github-readme-stats.vercel.app/api/pin/?username="+ Username+"&repo="+ Repo } />
                 </a>
            </>
        )
    }
}

export default RepoDivCard
