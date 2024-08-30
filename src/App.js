import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  
  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-Dark';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-Light';
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils2" aboutText="About Textutils" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
