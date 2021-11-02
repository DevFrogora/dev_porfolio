import React, { Component } from 'react'
import { PersonalDataConsumer } from '../personalDataContext'
import ExperienceLayout from './Experience/ExperienceTemplate/ExperienceLayout'
import InlineImageText from './Template/InlineImageText'

class Experience extends Component {
    
    render() {
        // var obj =[];
        var experience= false;
        let lockImageLink="https://media.discordapp.net/attachments/761943789593952299/904975406749327360/unknown.png";
        if(experience){
            return (
                <div>
                    <ExperienceLayout />
                </div>
            )
        }else{
            return (
                <div>
                    {/* text="<h2>No Expericence</h2>" */}
                    <InlineImageText imageLink={lockImageLink}  width="40px" height="40px">
                    <h2>No Expericence</h2>
                    </InlineImageText>
                </div>
            )
        }

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