import React, { Component } from 'react'
import "./css/messageTemplate.css"
import axios from 'axios'


class MessageTemplate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: ''
        }
    }

    handleOnDone = (e) => {
        let data = {
            date: this.state.date
        }
        console.log(data)

        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };

        axios.post('http://localhost:8080/FirstServlet/SetContactDone', data, config)
            .then(response => {
                // console.log(response.data)
                // console.log(this.state)
                console.log("done")
                this.props.Refresh();
            })
            .catch(e => console.log(e))
        e.preventDefault();

    }

    handleOnDelete = (e) => {
        let data = {
            date: this.state.date
        }
        console.log(data)

        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };

        axios.post('http://localhost:8080/FirstServlet/SetContactDelete', data, config)
            .then(response => {
                console.log("deleted ",this.state.date)
                this.props.Refresh();
            })
            .catch(e => console.log(e))
        e.preventDefault();

    }


    componentDidMount() {
        this.setState({
            date: this.props.TimeStamp
        })
    }

    render() {

        return (
            <div>
                <div className="message_container">
                    <div className="message_header">
                        <div className="message_username"> {this.props.Username}</div>
                        <div className="message_date"> {this.props.Date}</div>
                    </div>
                    {/* {console.log(this.props.TimeStamp)} */}
                    <div className="message_body">
                        <div className="message_data"> {this.props.Message}</div>
                        <div className="message_operation">
                            <button className="message_done" onClick={this.handleOnDone}>Done</button>
                            <button className="message_delete" onClick={this.handleOnDelete}>Delete</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MessageTemplate
