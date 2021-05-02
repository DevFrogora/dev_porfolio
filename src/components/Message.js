import React , {Component} from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state={
            message: "Welcome"
        }
    }

    changeMessage(){

        this.setState({
            message : 'Thank you for subscribing'
        })
    }

    render(){
        return(
            <div>
                <h1>
                    {this.state.message} {this.props.name}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe Me</button>
            </div>
        );
    }
    
}

export default Message;