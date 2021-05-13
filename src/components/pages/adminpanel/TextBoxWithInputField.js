import React, { Component } from 'react'
import "./css/TextBox.css"

class TextBoxWithInputField extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"",
             email:"",
             currentWorking:''
        }
    }
    
    handleOnChange = (e)=>{
            this.props.setStateOfParent(e)
    }

    render() {
        return (
            <>
                <div className="textbox_container" >
                    <span className="textbox_name">{this.props.text} : </span>
                    {/* <input  className="textbox_name" type="text" readonly="readonly" value={this.props.text} /> */}
                    <input className="textbox_feild" value={this.props.value} onChange={this.handleOnChange}
                            name ={this.props.name}></input>
                </div>
            </>
        )
    }
}

export default TextBoxWithInputField
