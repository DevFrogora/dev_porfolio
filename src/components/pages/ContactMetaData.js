import React, { Component } from 'react'
import "./css/contact.css"


 class ContactMetaData extends Component {
    render() {
        return (
            <div>
                <div className="metaData_List" >
                    <div className="metaData_container">
                        <span className="metaData_key">Total Message</span>
                        <span className="metaData_value"> 10 </span>
                    </div>
                    <div className="metaData_container">
                        <span className="metaData_key">Pending Message</span>
                        <span className="metaData_value"> 10 </span>
                    </div>
                    <div className="metaData_container">
                        <span className="metaData_key">Can Contact ? </span>
                        <span className="metaData_value"> Yes </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMetaData
