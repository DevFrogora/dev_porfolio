import React, { Component } from 'react'
import "./css/canContact.css"
import axios from 'axios'

class CanContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
            answer: 'yes'
        };
    }

    toggleChange = () => {
        this.setState({
            isChecked: !this.state.isChecked,
        }, () => {
            if (this.state.isChecked) {
                console.log("yes can Contact")
                this.setState({
                    isChecked: true,
                    answer: 'yes',
                });

                this.postReq("yes");
            } else {
                this.setState({
                    isChecked: false,
                    answer: 'no',
                });
                this.postReq("no");
            }
        });

    }

    componentDidMount() {
        axios.get('http://localhost:8080/FirstServlet/getContactOrNot')
            .then(response => {
                let respObj = response.data;
                console.log(respObj)
                if (respObj === 'yes') {
                    this.setState({
                        isChecked: true,
                        answer: 'yes'
                    });
                } else {
                    this.setState({
                        isChecked: false,
                        answer: 'no'
                    });
                }
            })
            .catch(e => console.log(e))
    }

    postReq = (setData) => {
        let data = {
            contact: setData
        }
        console.log(data)

        var config = {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        };

        axios.post('http://localhost:8080/FirstServlet/SetContactOrNot', data, config)
            .then(response => {
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <label>Can Contact ?----
                <input type="checkbox"
                    defaultChecked={this.state.isChecked}
                    onChange={this.toggleChange}
                />
                {this.state.answer}
            </label>
        );
    }
}

export default CanContact
