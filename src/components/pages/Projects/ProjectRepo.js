import React, { Component } from 'react'
import RepoDivCard from './RepoDivCard'
import CardDiv from './CardDiv'
import UnityPreviewTable from './PorjectPreview/UnityPreviewTable';
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
/**
 * read more about json
 * https://mkyong.com/javascript/how-to-access-json-object-in-javascript/#:~:text=Below%20is%20a%20JSON%20string.&text=To%20access%20the%20JSON%20object,%E2%80%9D%20or%20%E2%80%9C%5B%5D%E2%80%9D.
 */

var data = {
    projectlist: [{
        projectId: 1,
        projectName: "Offline Library Management System",
        projectDescription: "⚪ Offline database 📚",
        projectLanguages: ['java', 'html', 'php'],
        projectExecutableLink: "React",
        projectSourceLink: "",
        projectDocsLink: "",
        projectCoverImageLink: "https://media.discordapp.net/attachments/785143854705672223/843013010347261972/6c6a6a95e713d927ee884dbdd5f48283.png"
    },
    {
        projectId: 2,
        projectName: "Online Library Management System",
        projectDescription: "🟢 online database  📚",
        projectLanguages: ['csharp', 'cpp', 'php'],
        projectExecutableLink: "React",
        projectSourceLink: "",
        projectDocsLink: "",
        projectCoverImageLink: "https://media.discordapp.net/attachments/785143854705672223/843013010347261972/6c6a6a95e713d927ee884dbdd5f48283.png"
    }
    ]
};

var json = JSON.parse(JSON.stringify(data));
class ProjectRepo extends Component {
    render() {
        let username = "DevFrogora";
       
        return (
            <div >
                <RepoDivCard Username={username} Repo="LibraryManagementSystem" />
                <RepoDivCard Username={username} Repo="OnlineLibraryManagementSystem" />
                <RepoDivCard Username={username} Repo="DiscordSwing" />
                <RepoDivCard Username={username} Repo="GUIForChatiingApplication" />
                <RepoDivCard Username={username} Repo="StructuredWebsiteInPhp" />
                <br />
                {/* <CardDiv projName={json.projectlist[0].projectName}
                    projDescription= {json.projectlist[0].projectDescription}
                    projLanguages={json.projectlist[0].projectLanguages}
                    projCoverImageLink={json.projectlist[0].projectCoverImageLink}
                    projExecutableLink={json.projectlist[0].projectExecutableLink}
                    projSourceLink={json.projectlist[0].projectSourceLink}
                    projDocsLink={json.projectlist[0].projectDocsLink}
                /> */}
                 {/* <h2>Non-Github Repo</h2>
                <p>..............</p>
                {json.projectlist.map(project => {

                    return (
                        <CardDiv key={project.projectId} projName={project.projectName}
                            projDescription={project.projectDescription}
                            projLanguages={project.projectLanguages}
                            projCoverImageLink={project.projectCoverImageLink}
                            projExecutableLink={project.projectExecutableLink}
                            projSourceLink={project.projectSourceLink}
                            projDocsLink={project.projectDocsLink}
                        />
                    )

                })} */}
                <br/>
                <h2> Preview of Making Game</h2>
                <UnityPreviewTable/>
            </div>
        )
    }
}

export default ProjectRepo
