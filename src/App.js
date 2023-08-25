import React from "react";
import "./App.css";
import Formheader from "./components/Form/Formheader";
import Header from "./components/Header/Header";
import Mainbody from "./components/Homepage/Mainbody";
import Template from "./components/Homepage/Template";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Centeredtabs from "./components/Form/Tabs";
import QuestionForm from "./components/Form/Question/QuestionForm";
import Userform from "./components/Form/userForm/Userform";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/form/:id"
            element={
              <React.Fragment>
                <Formheader />
                <Centeredtabs />
                <QuestionForm />
              </React.Fragment>
            }
          ></Route>

          <Route path="/response" element={<Userform />}></Route>
          <Route
            path="/"
            element={
              <React.Fragment>
                <Header />
                <Template />
                <Mainbody />
              </React.Fragment>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
