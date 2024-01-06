// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import { useState } from "react";
// import About from "./components/About";



function App() {
  const [mode, setMode] = useState("light");
  const {width, height} = useWindowSize()

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "#6799A2"
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText= "about"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" mode={mode} />
      {/* <About/> */}
      </div>
      <Confetti
      width={width}
      height={height}
      recycle={false}
    />
    </>
  );
}

export default App;
