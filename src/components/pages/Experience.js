import React, { Component } from 'react'
import { PersonalDataConsumer } from '../personalDataContext'

class Experience extends Component {
    
    render() {
        // var obj =[];
        return (
            <div>
                No Experience
                {/* <ServletGetRequest /> */}
                <PersonalDataConsumer>
                    {
                        (JsonData) =>{
                         return <div>
                         Name : {JsonData.name} <br/>
                         Email : {JsonData.email}
                          </div> 
                        }
                    }
                </PersonalDataConsumer>
            </div>
        )
    }
}

export default Experience
