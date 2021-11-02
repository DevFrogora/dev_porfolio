import React, { Component } from 'react'
import './Resume/ResumeTable.css'
class Resume extends Component {
    handleDownloadingPDF = (event) => {
        window.print();
    }
    render() {
        
        return (
            <div>
                <table>
                    <tr className="Heading">
                        <td className="TopColumn">
                            <b> Ruhit Rai </b>  <br />
                            BCA <br />
                            Asian Institute of Management and Technology
                        </td>
                        <td>
                            Phone - +91-93xxxxxxxx <br />
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
                                        C,C++,Java,C#
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TopColumn">
                                        Web
                                    </td>
                                    <td>
                                        PHP,MySQL,HTML,CSS,JavaScript
                                    </td>
                                </tr>
                                <tr>
                                    <td className="TopColumn">
                                        Technology
                                    </td>
                                    <td>
                                        Git,Docker
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
                </table>
            <button onClick={this.handleDownloadingPDF}>Download As PDF</button>
            </div>
        )
    }
}

export default Resume
