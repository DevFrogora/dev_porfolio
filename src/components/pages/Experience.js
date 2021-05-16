import React, { Component } from 'react'
import { PersonalDataConsumer } from '../personalDataContext'
import ExperienceLayout from './Template/ExperienceTemplate/ExperienceLayout'

class Experience extends Component {
    
    render() {
        // var obj =[];
        return (
            <div>
                <ExperienceLayout />
            </div>
        )
    }
}

export default Experience


// No Experience
// {/* <ServletGetRequest /> */}
// <PersonalDataConsumer>
//     {
//         (JsonData) =>{
//          return <div>
//          Name : {JsonData.name} <br/>
//          Email : {JsonData.email}
//           </div> 
//         }
//     }
// </PersonalDataConsumer>