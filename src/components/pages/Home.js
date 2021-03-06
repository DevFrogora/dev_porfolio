import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./Home/home.css"
import InlineImageText from './Template/InlineImageText'
import { PersonalDataConsumer } from '../personalDataContext'


class Home extends Component {
    render() {
        let githubImageLink = "https://media.discordapp.net/attachments/658935195403026432/836824730459570196/github-logo_icon-icons.com_73546.png";
        let linkedinImageLink = "https://media.discordapp.net/attachments/658935195403026432/837224939991990302/clipart2958481.png";
        let discordImageLink = "https://media.discordapp.net/attachments/658935195403026432/837226050139324477/kisspng-discord-computer-icons-logo-clip-art-antopodis-logo-5aec73128661a7.0196443115254453945504.png";
        return (
            <>
                <div className="socialList">
                    <ul className="listItem">
                        <li>
                            <InlineImageText imageLink={githubImageLink} text="" width="24px" height="24px" />
                        </li>
                        <li>
                            <InlineImageText imageLink={linkedinImageLink} text="" width="24px" height="24px" />

                        </li>
                        <li>
                            <InlineImageText imageLink={discordImageLink} text="" width="29px" height="29px" />

                        </li>
                    </ul>
                </div>
                <div className="homeHeadingContainer shiftRight">

                    <div>
                        <h1 className="heading">Hi, my name is Ruhit Rai</h1>
                    </div>
                    <div  >
                        <h2 className="big-heading">
                            <PersonalDataConsumer>
                                {
                                    (JsonData) => {
                                        return <span>
                                            {JsonData.name}
                                        </span>
                                    }
                                }
                            </PersonalDataConsumer>
                        </h2>
                    </div>
                    <div >
                        <h3 className="big-heading">I build things for the Desktop , Backend, Mobile , Web.</h3>
                    </div>
                    <div >
                        <p className="homeStory">I'm a BCA student who likes to  build application for PC , Mobile , Web and embedded application.
                            Currently, finding for freelance or junior java dev job:) .
                            {/* <a className="link" href="https://upstatement.com/"> Upstatement </a>
                                         focused on building accessible, human-centered products. */}
                        </p>
                    </div>
                    <div >
                        <NavLink to="/contact">
                            <button className="getInTouch"  >Get In Touch</button>
                        </NavLink>

                    </div>
                </div>
            </>
        )
    }
}

export default Home
