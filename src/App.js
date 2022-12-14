import "./App.css";
import {Footer,Navbar} from "./component"
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./screens/Home/Home";
import Model from "./screens/Model/Model";
import ProgramTrain from "./screens/ProgramTrain/ProgramTrain";
import StudentsAcademy from "./screens/StudentsAcademy/StudentsAcademy";
import About from "./screens/About/About";
import AcademicCampus from "./screens/AcademicCampus/AcademicCampus";
import BoardTrust from "./screens/BoardTrust/BoardTrust";

function App() {
  return (
      <Router>
    <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/model">
              <Model />
          </Route>
          <Route path="/programtrain">
              <ProgramTrain />
          </Route>
          <Route path="/student">
              <StudentsAcademy />
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/campus">
              <AcademicCampus />
          </Route>
          <Route path="/trust">
              <BoardTrust />
          </Route>
        </Switch>
        <Footer />
    </div>
      </Router>
  );
}

export default App;
