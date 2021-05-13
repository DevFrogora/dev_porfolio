import React, { Component } from 'react'
import ContactMetaData from './ContactMetaData'
import "./css/contactForm.css"
import axios from 'axios'

class Contact extends Component {

    constructor(props) {
        super(props)
        this.child = React.createRef();
        this.state = {
            username: '',
            email: '',
            message: '',
            message_type: '',
            form_status: '',
            form_status_message: '',
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
        if (this.state.username !=='' && this.state.email !==''

            && this.state.message !== '' && this.state.message_type !== '') {

            alert(`${this.state.username} ${this.state.email} ${this.state.message} ${this.state.message_type}`)
                console.log(this.state);
            this.setState(prevState => ({
                // form_status: '',
                form_status: 'form_status_success',
                form_status_message: 'send done'

            }))

            var config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            };

            let data= {
                username : this.state.username,
                email : this.state.email,
                message : this.state.message,
                message_type : this.state.message_type
                }
            
            console.log(data)
            axios.post('http://localhost:8080/FirstServlet/setContactData', data, config)
            .then(response => {
                // console.log(response.data)
                // console.log(this.state)

            })
            .catch(e => console.log(e))
             event.preventDefault();

        } else {
            event.preventDefault();
            alert('empty');
            this.setState(prevState => ({
                // form_status: '',
                form_status: 'form_status_failed',
                form_status_message: 'send failed'
            }))
            console.log(`${this.state.form_status_message}`)
        }
    }

    handleToRefresh = () => {
        this.child.current.handleOnChange();
    }


    render() {
        console.log("Contact Parent data");

        return (
            <div >
                <p className="my_message">
                    <span>
                        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </span>
                </p>
                <ContactMetaData   ref={this.child} />
                <div className="form_container">
                    <form onSubmit={this.handleSubmit} > 
                        <div>
                            <div className="form_username">
                                <input
                                    placeholder="UserName"
                                    type="text"
                                    value={this.state.username}
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
                        <button className="submit_btn" type="submit" onClick={this.handleToRefresh}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact
