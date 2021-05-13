import React, { Component } from 'react'
import MessageTemplate from './MessageTemplate'
import axios from 'axios'


class ContactMessages extends Component {
    constructor(props) {
        super(props)

        this.state = {
            links: [],
            pending: 'true'
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8080/FirstServlet/getContactDataInAdmin')
            .then(response => {
                console.log(response.data)
                this.setState({
                    links: response.data
                })
            })
            .catch(e => console.log(e))

    }

    handleOnRefresh = () => {
        axios.get('http://localhost:8080/FirstServlet/getContactDataInAdmin')
            .then(response => {
                console.log(response.data)
                this.setState({
                    links: response.data
                })
            })
            .catch(e => console.log(e))
    }

    handleOnToggleShow = () => {
        if (this.state.pending === 'true') {
            this.setState({
                pending: 'false'
            })
        } else {
            this.setState({
                pending: 'true'
            })
        }
        this.handleOnRefresh();
    }

    render() {

        return (
            <div>
                <button onClick={this.handleOnRefresh}>Refresh</button>
                <button onClick={this.handleOnToggleShow}> Pending : {this.state.pending}</button>
                {this.state.links.map(link => {
                    if (this.state.pending === 'true') {
                        if (link.pending) {
                            let date = new Date(link.date)
                            let dateTimeString = date.toLocaleDateString('en-GB') + " " + date.toLocaleTimeString()
                            return (<MessageTemplate key={link.date} Username={link.username} Date={dateTimeString} Message={link.message} TimeStamp={link.date} Refresh={this.handleOnRefresh} />)
                        }
                    } else {
                        if (!link.pending) {
                            let date = new Date(link.date)
                            let dateTimeString = date.toLocaleDateString('en-GB') + " " + date.toLocaleTimeString()
                            return (<MessageTemplate key={link.date} Username={link.username} Date={dateTimeString} Message={link.message} TimeStamp={link.date} Refresh={this.handleOnRefresh} />)
                        }
                    }

                })}
            </div>
        )
    }
}

export default ContactMessages
