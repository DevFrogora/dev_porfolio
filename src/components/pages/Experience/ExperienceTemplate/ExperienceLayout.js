import React, { Component } from 'react'
import experienceCss from "./experienceLayout.module.css"
import "./reset.css"
let jobsList = []
let buttonList = []
let data = {

    // companies: [{
    //     id: 1,
    //     companyName: "Google",
    //     companySiteLink: "",
    //     jobTitles: "software engg 1",
    //     JoinTimeStamp: 213,
    //     leaveTimeStamp: 12312,
    //     jobs: ["Google what you developed or achieved or worked 1",
    //         "Google what you developed or achieved or worked 2",
    //         "Google what you developed or achieved or worked 3"]
    // }, {
    //     id: 2,
    //     companyName: "MicroSoft",
    //     companySiteLink: "",
    //     jobTitles: "software engg 2",
    //     JoinTimeStamp: 213,
    //     leaveTimeStamp: 12312,
    //     jobs: ["MicroSoft job1", " MicroSoft job2", " MicroSoft job3"]

    // }, {
    //     id: 3,
    //     companyName: "Infosys",
    //     companySiteLink: "",
    //     jobTitles: "software engg 3",
    //     JoinTimeStamp: 213,
    //     leaveTimeStamp: 12312,
    //     jobs: ["Infosys job1", "Infosys job2", "Infosys job3"]
    // }]

}
let json = JSON.parse(JSON.stringify(data));
class ExperienceLayout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: 1,
            companyName: "Infosys",
            companySiteLink: "",
            jobTitles: "software engg",
            JoinTimeStamp: 213,
            leaveTimeStamp: 12312,
            jobs: [],
            buttonListState: [],
            active: 1,

        }
    }

    handleOnCompanySlect = (e) => {
        let buttonValue = e.target.value;
        while (jobsList.length) {
            jobsList.pop();
        }

        {
            json.companies.map(company => {
                if (buttonValue === company.companyName) {
                    this.setState({
                        id: company.id,
                        companyName: company.companyName,
                        jobTitles: company.jobTitles,
                        companySiteLink: company.companySiteLink,
                        JoinTimeStamp: company.JoinTimeStamp,
                        leaveTimeStamp: company.leaveTimeStamp,
                        jobs: company.jobs
                        // buttonListState: [],
                    })
                    company.jobs.forEach((job, index) => {
                        jobsList.push(<li key={index} className={experienceCss.li}>{job}</li>)
                    })
                    this.setState({
                        jobs: jobsList,
                        active: company.id
                    }, () => {
                        //finished
                        this.reLoadButtonList()
                    })

                }

            })

            console.log(this.state.active)



        }
    }

    reLoadButtonList() {
        console.log("reloadButton")
        while (buttonList.length) {
            buttonList.pop();
        }
        json.companies.map((company) => {

            buttonList.push(<button key={company.id} className={experienceCss.button}
                className={this.state.active === company.id ? experienceCss.active : experienceCss.button}
                onClick={this.handleOnCompanySlect}
                value={company.companyName}>{company.companyName}</button>)

        })

        this.setState({
            buttonListState: buttonList
        })
    }

    componentDidMount() {
        while (buttonList.length) {
            buttonList.pop();
        }
        while (jobsList.length) {
            jobsList.pop();
        }
        json.companies.map((company) => {

            buttonList.push(<button key={company.id} className={experienceCss.button}
                className={this.state.active === company.id ? experienceCss.active : experienceCss.button}
                onClick={this.handleOnCompanySlect}
                value={company.companyName}>{company.companyName}</button>)

        })

        this.setState({
            buttonListState: buttonList
        })
        json.companies.map(company => {
            if (this.state.active === company.id) {
                this.setState({
                    id: company.id,
                    companyName: company.companyName,
                    jobTitles: company.jobTitles,
                    companySiteLink: company.companySiteLink,
                    JoinTimeStamp: company.JoinTimeStamp,
                    leaveTimeStamp: company.leaveTimeStamp,
                    jobs: company.jobs
                    // buttonListState: [],
                })
                company.jobs.forEach((job, index) => {
                    jobsList.push(<li key={index+1} className={experienceCss.li}>{job}</li>)
                })
                this.setState({
                    jobs: jobsList,
                    active: company.id
                }, () => {
                    //finished
                    console.log("componentDIdMount")
                    this.reLoadButtonList()
                })

            }

        })


    }

    render() {
        if(json.companies.length){
            return (
                <div>
                    <div className={experienceCss.cardBlock}>
                        <div className={experienceCss.card}>
    
                            <div className={experienceCss.row}>
                                <div className={`${experienceCss.column} ${experienceCss.grow1}`}>
                                    <div className={experienceCss.companyName}>
                                        
                                        {this.state.buttonListState}
                                    </div>
                                </div>
                                <div className={`${experienceCss.column} ${experienceCss.grow2}`}>
                                    <div className={experienceCss.content}>
                                        <div className={experienceCss.header}>
                                            <h2 > {this.state.jobTitles} <a  className={experienceCss.siteLink} href={this.state.companySiteLink}> @ {this.state.companyName} </a> </h2>
                                            <span className={experienceCss.timestamp}> {this.state.JoinTimeStamp} - {this.state.leaveTimeStamp}</span>
                                        </div>
                                        <ul className={`${experienceCss.Projectslinks} ${experienceCss.sizeSmallFont}`}>
                                            {/* <li className={experienceCss.li}>what you developed or achieved or worked</li>
                                            <li className={experienceCss.li}>what you developed or achieved or worked</li>
                                            <li className={experienceCss.li}>what you developed or achieved or worked</li> */}
                                            {this.state.jobs}
                                            {/* {this.state.active} */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(<div>Locked</div>)
        }
       
    }
}

export default ExperienceLayout
