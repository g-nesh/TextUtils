// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'



function App() {
  const {width, height} = useWindowSize()
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText= "about"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" />
      <div className="container my-3">
      <TextForm heading = "Enter the text to analyze below" />
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
