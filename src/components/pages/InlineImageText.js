import React, { Component } from 'react'
import "./inlineImageText.css"

class InlineImageText extends Component {

    render() {
        let { imageLink, text ,width , height,redirectLink } = this.props;
        return (
            <div>
                <div className="amazonLink">
                    <a href={redirectLink}>
                        <img className="amazonLink__image"
                            src={imageLink} width={width} height={height} />
                        <div className="amazonLink__text">{text}</div>
                    </a>
                </div>
            </div>
        )
    }
}

export default InlineImageText
