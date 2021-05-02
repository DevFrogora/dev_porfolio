import React, { Component } from 'react'
import ContactMetaData from './ContactMetaData'
import "./css/contactForm.css"

class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            message: '',
            message_type: '',
            form_status: '',
            form_status_message: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value

        })
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleMsgTypeChange = (event) => {
        this.setState({
            message_type: event.target.value
        })
    }

    handleSubmit = (event) => {
            //            && typeof (this.state.message_priority) != "undefined"
        if (this.state.username != '' && this.state.email != ''

            && this.state.message != '') {

            alert(`${this.state.username} ${this.state.email} ${this.state.message} ${this.state.message_priority}`)

            this.setState(prevState => ({
                form_status: '',
                form_status: 'form_status_success',
                form_status_message: 'send done'

            }))
            event.preventDefault();
        } else {
            event.preventDefault();
            alert('empty');
            this.setState(prevState => ({
                form_status: '',
                form_status: 'form_status_failed',
                form_status_message: 'send failed'
            }))
            console.log(`${this.state.form_status_message}`)
        }
    }


    render() {
        return (
            <div >
                <p className="my_message">
                    <span>
                        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </span>
                </p>
                <ContactMetaData />
                <div className="form_container">
                    <form onSubmit={this.handleSubmit} > 
                        <div>
                            <div className="form_username">
                                <input
                                    placeholder="UserName"
                                    type="text"
                                    value={this.state.useranme}
                                    onChange={this.handleUsernameChange}
                                />
                            </div>
                            <div className="form_email">
                                <input
                                    placeholder="Email"
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className="form_message">
                                <textarea
                                    placeholder="message"
                                    value={this.state.message}
                                    onChange={this.handleMessageChange}>
                                </textarea>
                            </div>
                            <div className="form_status">
                                <div className={this.state.form_status === "form_status_success" ? "form_status_success" : "form_status_failed"}>
                                    {this.state.form_status_message}
                                </div>
                            </div>
                            <div className="form_msgtype">
                                <label className="form_msgtype_lable" > Message Type </label>
                                <select value={this.state.message_type} onChange={this.handleMsgTypeChange}
                                    className="form_msgtype_selector">
                                    <option value="Urgent">Urgent</option>
                                    <option value="Hiring">Hiring</option>
                                    <option value="Greeting">Greeting</option>
                                    <option value="Spam">Spamming</option>
                                </select>
                            </div>
                        </div>
                        <button className="submit_btn" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact
