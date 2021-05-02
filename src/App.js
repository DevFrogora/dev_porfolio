import React ,{Component,Fragment} from "react";
import "./App.css"
import Greet from './components/Greet'
import { Greeting } from './components/Greet'
import Message from './components/Message'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import UserGreeting from "./components/UserGreeting";
import NameList from "./components/NameList";
import Stylessheet from "./components/Stylessheet";
import styles from "./appStyles.module.css"
import Form from "./components/Form"
import LifecycleA from "./components/LifecycleA"
import {BrowserRouter as Router, Route , Switch } from "react-router-dom"
import Navbar from "./components/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";


class App extends Component{
    render(){
        return (
        <Router>
            <div className="App">
                {/* <Greet />
                <Greeting name="Ramu" heroname="superman"/>
                <Message name="Ramu" heroname="superman"/>
                <Welcome name="Frogora" heroname="Frogoman"/>
                <Counter /> */}
                {/* <UserGreeting />
                <NameList/> */}
                {/* <Stylessheet cssStyle={styles.success}/> */}
                {/* <Form/>
                <LifecycleA /> */}
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/experience" component={Experience}/>
                    <Route path="/projects" component={Projects}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
            </div>
        </Router>
        );
        // you can use JSX instead 
    }
}

export default App;