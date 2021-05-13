import React, { Component } from 'react'
import TextBoxWithInputField from './TextBoxWithInputField'
import axios from 'axios'
import "./css/adminSetting.css"
import PersonalDataContext, { PersonalDataConsumer } from '../../personalDataContext'
import MyDataConfig from './MyDataConfig'
import ContactMessages from './ContactMessages'
import CanContact from './CanContact'

class AdminSetting extends Component {

    render() {
        // const { name, email, currentWorking } = this.state;
        return (
            <div>
                Admin Page
                <br />
                <span className="config_header">Set the config. </span><br />
                <div className="setting_list">
                   <MyDataConfig/> 
                </div>
                
                <br/>
                <span className="config_header"> Contact Messages </span><br />
                <CanContact />
                <div className="contact_list">
                   <ContactMessages/>
                </div>
            </div>
        )
    }
}

export default AdminSetting
