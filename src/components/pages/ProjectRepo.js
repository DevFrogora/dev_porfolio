import React, { Component } from 'react'
import RepoDivCard from './RepoDivCard'


class ProjectRepo extends Component {
    render() {
      let username="DevFrogora"
        return (
            <div >
                <RepoDivCard Username={username} Repo="LibraryManagementSystem" />                 
                <RepoDivCard Username={username} Repo="OnlineLibraryManagementSystem" />                 
                <RepoDivCard Username={username} Repo="DiscordSwing" />                 
                <RepoDivCard Username={username} Repo="GUIForChatiingApplication" />                 
                <RepoDivCard Username={username} Repo="StructuredWebsiteInPhp" />                 
            </div>
        )
    }
}

export default ProjectRepo
