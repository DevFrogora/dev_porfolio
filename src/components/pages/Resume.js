import React, { Component } from 'react'
import './Resume/ResumeTable.css'
class Resume extends Component {
    handleDownloadingPDF = (event) => {
        var navElement= document.getElementsByTagName("nav");
        document.title = ""
        for(var i=0; i< navElement.length; i++)
        {
            // navElement[i].style.visibility = 'hidden';
            navElement[i].style.display = 'none';
        }
        let phoneNumber = prompt("Please enter your phoneNumber", "6464464658");
        document.getElementById("phoneNumber").innerHTML = phoneNumber;
        document.getElementById("h1resume").style.display = "";
        window.print();
        //reset
        for(var i=0; i< navElement.length; i++)
        {
            // navElement[i].style.visibility = 'visible';
            navElement[i].style.display = '';
        }
        document.title = "Portfolio"
        document.getElementById("phoneNumber").innerHTML = "93xxxxxxxx";
        document.getElementById("h1resume").style.display = "none";
    }


    render() {
        const headingResumeStyle = {
            color: "",
            textAlign: "center",
            // fontFamily: "Arial"
            display : "none"
          };
        
        return (
            <div>
                <h1 id="h1resume" style={headingResumeStyle}> Resume</h1>
                <table>
                    <tr className="Heading">
                        <td className="TopColumn">
                            <b> Ruhit Rai </b>  <br />
                            BCA <br />
                            Asian Institute of Management and Technology
                        </td>
                        <td>
                            Phone - +91-<span id='phoneNumber'>93xxxxxxxx</span> <br />
                            Email - ruhitrai1997@gmail.com <br />
                            Address : 51A, Narengi Tiniali , Guwahti , Assam - 781026
                        </td>
                    </tr>
                    <tr className="Education resumeSection" >
                        <td colspan="2">
                            <h3>  <b> Education  </b> </h3>
                            <table className="interTable">
                                <tr>
                                    <td className="TopColumn">
                                        2017-20
                                    </td>
                                    <td>
                                        Bachelor of Computer And Technology <br />
                                        Asian Institute of Management and Technology
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr className="resumeSection">
                        <td colspan="2">
                            <h3>  <b> Technical Skills  </b> </h3>
                            <table >
                                <tr>
                                    <td className="TopColumn">
                                        Languages
                                    </td>
                                    <td>
                                        C,C++,Java,C#,PHP,HTML,JavaScript
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TopColumn">
                                        Tools
                                    </td>
                                    <td>
                                        Git,Docker,maven,gradle,Blender
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TopColumn">
                                        Technologies
                                    </td>
                                    <td>
                                        MySQL,CSS,Servlet,JSP ,Unity, Opencv , Arduino
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TopColumn">
                                        SDK
                                    </td>
                                    <td>
                                        Android-SDK
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr className="resumeSection">
                        <td colspan="2">
                            <h3>  <b> Academic Projects  </b> </h3>
                            <table >
                                <tr>
                                    <td className="TopColumn">
                                        feb-jun 18
                                    </td>
                                    <td>
                                        <b>Library Management System Offline</b> ( BCA Project, 4th Semester) <br />
                                        ➡ Used to store book and member details as well as Borrow & Return Records <br />
                                        ➡ Technology : Java (Swing For GUI), Mysql (For DB) <br />
                                        ➡ Platform : Cross Platform
                                    </td>

                                </tr>
                                <tr>
                                    <td className="TopColumn">
                                        Aug-dec 20
                                    </td>
                                    <td>
                                        <b>Library Management System Online</b> ( BCA Project, 6th Semester) <br />
                                        ➡ Used to store book and member details as well as Borrow & Return Records <br />
                                        ➡ Technology : Java (Swing For GUI), Mysql (For DB) ,PHP <br />
                                        ➡ Platform : Cross Platform <br />
                                        ➡ Addition : Android Application to access details about Members
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>
                    <tr className="resumeSection">
                        <td colspan="2">
                            <h3>  <b> Other Projects  </b> </h3>
                            Github profile : https://github.com/DevFrogora
                        </td>
                    </tr>
                </table>
            <button onClick={this.handleDownloadingPDF}>Download As PDF</button>
            
            </div>
        )
    }
}

export default Resume
