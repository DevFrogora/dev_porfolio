import React, { Component } from 'react'
import "./css/about.css"

 class HeaderForAbout extends Component {
    render() {
        return (
            <div>
                 <div className="center">
                    <a href="/images/profilepic.png">
                        <img className="username_pic" src="/images/profilepic.png" alt="FrogoraProfilePic"   />
                    </a>
                    <div className="clearfix">
                        <a href="https://www.y.com/">
                            <h1 className="username">
                                Frogora Dev
                            </h1>
                        </a>
                    </div>
                    <h2 className="username_description">
                        Super Excited Developer
                    </h2>
                </div>
            </div>
        )
    }
}

export default HeaderForAbout
