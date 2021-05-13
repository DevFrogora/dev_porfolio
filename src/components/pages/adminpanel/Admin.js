import React, { Component } from 'react'
import axios from 'axios'
import AdminSetting from './AdminSetting'

class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            result:''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = (event) => {
        if (this.state.username != '' && this.state.password != '') {
            // axios(options);
            var config = {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
              };

            axios.post('http://localhost:8080/FirstServlet/verifypassword', this.state, config)
            .then(response => {
                console.log(response.data)
                console.log(this.state)
                this.setState({
                     result: response.data //jsonObject
                })

                console.log(this.state.result)

            })
            .catch(e => console.log(e))
            

            event.preventDefault();
        } else {
            event.preventDefault();
            alert('wrong');
            console.log(`${this.state.form_status_message}`)
        }
    }

    render() {

        if(this.state.result === true ) {
            return(
                <AdminSetting />
            )
        }else{
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>UserName</label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleUsernameChange} >
                        </input><br />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}  >
                        </input><br />
                        <button type="submit">Login </button>
                    </form>
                </div>
            )
        }
        
    }
}

export default Admin
