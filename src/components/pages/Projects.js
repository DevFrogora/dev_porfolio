import React, { Component } from 'react'
import InlineImageText from './Template/InlineImageText'
import ProjectRepo from './Projects/ProjectRepo'
import './Projects/projects.css'
import { PersonalDataConsumer } from '../personalDataContext'

class Projects extends Component {
    render() {
        // const githubRepoApi= https://api.github.com/repos/{username}/{reponame}
        let githubImageLink="https://media.discordapp.net/attachments/658935195403026432/836824730459570196/github-logo_icon-icons.com_73546.png";
        let mailBoxImageLink="https://media.discordapp.net/attachments/658935195403026432/836885946670645268/Vector-Mailbox-Transparent-Background-PNG.png";
        let locationImageLink="https://media.discordapp.net/attachments/658935195403026432/836886495033425930/Daco_150510.png"
        return (
            <div className="parent">
                <div className="split1 left">
                    <div className="centered">
                        <img className="logoImage" src="https://media.discordapp.net/attachments/658935195403026432/836824740327850024/github_logo_icon_143772.png" alt="Avatar woman" />
                        <h2 className="githubText">Github</h2>
                        <InlineImageText imageLink={githubImageLink} text="@github" width="24px" height="24px" redirectLink="https://github.com/DevFrogora"/>
                        <PersonalDataConsumer>
                                    {
                                        (JsonData) => {
                                            return <span>
                                                {/* <InlineImageText imageLink={mailBoxImageLink} text={JsonData.email} width="18px" height="18px"/> */}
                                                <InlineImageText imageLink={mailBoxImageLink} text="ruhitrai1997@gmail.com" width="18px" height="18px"/>
                                            </span>
                                        }
                                    }
                                </PersonalDataConsumer>
                        
                        <InlineImageText imageLink={locationImageLink} text="Guwahati Assam , India" width="18px" height="18px" />
                    </div>
                </div>
                <div className="split2 right">
                    <div className="contentStyle shiftLeft">
                        <h2>My Projects</h2>
                        <p>Github repositories that I've built.</p>
                        <ProjectRepo />
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
