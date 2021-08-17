
import "./style/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Contactcta from "./components/contactcta";
import Projects from "./components/projects";
import Projectdetail from "./components/projectdetail";
import Contact from "./components/contact";
function App() {
  return <Router >
     <Header/>
     <Switch>
        <Route exact path="/"  >
          <Home />
        </Route>
        <Route exact path="/projects">
           <Projects />
        </Route>
        <Route exact path="/projects/:id">
           <Projectdetail />
        </Route>
        <Route exact path="/contact">
           <Contact />
        </Route>
     </Switch>
    <Contactcta/>
    <Footer/>
  </Router>;
}

export default App;
