import React, { Component } from 'react'
import TextBoxWithInputField from './TextBoxWithInputField'
import axios from 'axios'
import "./css/adminSetting.css"
import PersonalDataContext, { PersonalDataConsumer } from '../../personalDataContext'

class MyDataConfig extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            currentWorking: ''
        }
    }

    componentDidMount() {
        let jsonObject = this.context
        this.setState({
            name: jsonObject.name,
            email: jsonObject.email,
            currentWorking: jsonObject.currentWorking
        })

    }

    handleOnClick = (e) => {
        // alert(`${this.state.name} ${this.state.email} ${this.state.currentWorking}`)
        if (this.state.name != '' && this.state.email != ''
            && this.state.currentWorking != '') {
            // axios(options);
            var config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };

            axios.post('http://localhost:8080/FirstServlet/setPersonalData', this.state, config)
                .then(response => {
                    // console.log(response.data)
                    // console.log(this.state)
                })
                .catch(e => console.log(e))
            e.preventDefault();
        } else {
            e.preventDefault();
            alert('wrong');
            // console.log(`${this.state.form_status_message}`)
        }
    }

    setStateOfParent = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    render() {
        return (
            <div>
                <div className="config_List">
                    <div className="config_Item"> <TextBoxWithInputField text="Name" value={this.state.name}
                        name="name" setStateOfParent={this.setStateOfParent} /> </div>
                    <div className="config_Item"> <TextBoxWithInputField text="Email" value={this.state.email}
                        name="email" setStateOfParent={this.setStateOfParent} /> </div>
                    <div className="config_Item"> <TextBoxWithInputField text="CurrentWorking" value={this.state.currentWorking}
                        name="currentWorking" setStateOfParent={this.setStateOfParent} /> </div>
                    <button onClick={this.handleOnClick} >Save</button>
                </div>
            </div>
        )
    }
}

MyDataConfig.contextType = PersonalDataContext

export default MyDataConfig
