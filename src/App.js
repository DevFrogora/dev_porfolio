import React, { Component  } from "react";
import "./App.css"

// import NameList from "./components/NameList";
// import Stylessheet from "./components/Stylessheet";
// import styles from "./appStyles.module.css"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import { PersonalDataProvider } from "./components/personalDataContext";
import "./components/pages/httpRequest/ServletGetRequest"
// import {sendRequest} from "./components/pages/httpRequest/ServletGetRequest.js";
import axios from 'axios'
import Admin from "./components/pages/adminpanel/Admin";


// let Data;
class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            PersonalDetails: [] //jsonObject in array
        }
    }

    componentDidMount() {
        //    var PersonalDetails = new ServletGetRequest();
        //    let JsonData = PersonalDetails.sendRequest()
        //    console.log(JsonData)
        //    Data= JsonData;
        //    this.setState({
        //        PersonalDetails: JsonData
        //    })
        //    console.log("App:  "+Data)
        //    alert("checking")

        axios.get('http://localhost:8080/FirstServlet/pqr')
            .then(response => {
                console.log(response.data)
                // Data = JSON.stringify(response.data); //json string
                this.setState({
                    PersonalDetails: response.data //jsonObject
                })
            })
            .catch(e => console.log(e))
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <PersonalDataProvider value={this.state.PersonalDetails}>
                        <Navbar />
                        <Switch>
                            <Route path="/dev_porfolio" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/experience" component={Experience} />
                            <Route path="/projects" component={Projects} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/admin" component={Admin} />
                        </Switch>
                    </PersonalDataProvider>
                </div>
            </Router>
        );
        // you can use JSX instead 
    }
}

export default App;