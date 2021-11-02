import React, { PureComponent } from 'react'
import "./contact.css"
import axios from 'axios'


class ContactMetaData extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            totalCount: 0,
            pendingCount: 0,
            falseCount: 0,
            canContact: "no"
        }
    }

    componentDidMount() {
        //   setInterval(()=>{

        axios.get('http://localhost:8080/FirstServlet/getContactData')
            .then(response => {
                let respObj = response.data;
                    this.setState({
                        totalCount: respObj.totalCount,
                        pendingCount: respObj.pendingCount,
                        falseCount: respObj.falseCount,
                        canContact: respObj.canContact
                    })
            })
            .catch(e => console.log(e))
        //  },2000)

    }

    componentWillUnmount() {
        this.setState({
            mounted: false
        })
    }



    handleOnChange = () => {
        setTimeout(() => {
            axios.get('http://localhost:8080/FirstServlet/getContactData')
                .then(response => {
                    let respObj = response.data;
                    console.log("run from handleOnChnage on Button submit")

                    this.setState({
                        totalCount: respObj.totalCount,
                        pendingCount: respObj.pendingCount,
                        falseCount: respObj.falseCount,
                        canContact: respObj.canContact
                    })

                })
                .catch(e => console.log(e))
        }, 3000);
    }

    render() {
        console.log("ContactMetaData--Render --updated");
        return (

            <div>
                <div className="metaData_List" >
                    <div className="metaData_container">
                        <span className="metaData_key">Total Message</span>
                        <span className="metaData_value"> {this.state.totalCount} </span>
                    </div>
                    <div className="metaData_container">
                        <span className="metaData_key">Pending Message</span>
                        <span className="metaData_value"> {this.state.pendingCount} </span>
                    </div>
                    <div className="metaData_container">
                        <span className="metaData_key">Can Contact ? </span>
                        <span className="metaData_value"> {this.state.canContact} </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMetaData
