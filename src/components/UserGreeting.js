import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false,
             user : "Guest"
        }
    }
    
    changeLogIn(){
       this.state.isLoggedIn = this.state.isLoggedIn ? false: true
       if(this.state.isLoggedIn){
            this.setState({
                user : "Vishwas"
            })
       }else{
            this.setState({
                user : "Guest"
            })
       }
       console.log(this.state.isLoggedIn)
    }
    
    render() {
        let message;
        if(this.state.isLoggedIn){
            message= <div> Welcome {this.state.user} </div>
        }else{
            message= <div> Welcome {this.state.user} </div>
        }

        return (
        <div>
            {message}
            <button onClick ={() => this.changeLogIn()}>toggle</button>
        </div>
        );
    }
}

export default UserGreeting
