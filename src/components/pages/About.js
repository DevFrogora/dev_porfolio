import React, { Component } from 'react'
import HeaderForAbout from './About/HeaderForAbout'
import { PersonalDataConsumer } from '../personalDataContext'

class About extends Component {
    render() {
        return (
            <div>
                <HeaderForAbout />

                <p className="about_intro">Hello! My name is Ruhit Rai  <PersonalDataConsumer>
                    {
                        (JsonData) => {
                            return <span>
                                {JsonData.name}
                            </span>
                        }
                    }
                </PersonalDataConsumer> and I enjoy creating things that live on the internet.
                     My interest in Desktop , Android Mobile , Backend development  started  in 2017 when I decided to learn BCA </p>
                <div className="middle_container">

                    <div className="skillList">
                        <div className="skillItem"> C</div>
                        <div className="skillItem"> C++</div>
                        <div className="skillItem"> C#</div>
                        <div className="skillItem"> Java SE </div>
                        <div className="skillItem"> JAVA JDBC</div>
                        <div className="skillItem"> JavaSwing </div>
                        <div className="skillItem"> JavaServlet </div>
                        <div className="skillItem"> Javascript </div>
                        <div className="skillItem"> HTML </div>
                        <div className="skillItem"> CSS </div>
                        <div className="skillItem"> PHP </div>
                        <div className="skillItem"> ajax </div>
                        <div className="skillItem"> Reactjs</div>
                        <div className="skillItem"> Mysql</div>
                        <div className="skillItem"> Unity</div>
                        <div className="skillItem"> Android</div>
                        <div className="skillItem"> firebase</div>
                        <div className="skillItem"> git</div>
                        <div className="skillItem"> Docker</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About
