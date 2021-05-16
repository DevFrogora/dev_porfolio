import React, { Component } from 'react'
import "./cardDiv.css"
import Languages from './Languages'
import "./projectLinks.css"

let languages = [];
class CardDiv extends Component {

    componentDidMount() {

    }

    render() {
        const languagelist = []
        this.props.projLanguages.forEach((language) => {
            languagelist.push(<Languages key={language} name={language} />)
        })
        return (
            <div className="cardBlock"> <div className="card">

                <div className="row">
                    <div className="column grow1">
                        <div className="photo">
                            <img className="img"
                                src={this.props.projCoverImageLink} />
                        </div>
                    </div>
                    <div className="column grow2">
                        <div className="content">
                            <div className="header">
                                <h2>{this.props.projName}</h2>
                            </div>
                            <p>
                                {this.props.projDescription}
                            </p>
                            <ul className="Projectslinks sizeSmallFont">
                                {/* <!--parent element--> */}
                                <li ><a href={this.props.projExecutableLink}>executable</a></li>
                                {/* <!--first child element--> */}
                                <li> <a href={this.props.projSourceLink}>source</a> </li>
                                {/* <!--second child element--> */}
                                <li> <a href={this.props.projDocsLink}>docs</a> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="column wrap grow1 sizeSmallFont">
                        Languages/library/Framework
                </div>
                    <div className="column wrap grow2 sizeSmallestFont">
                        {languagelist}
                    </div>

                </div>
            </div>
            </div>
        )
    }
}

export default CardDiv