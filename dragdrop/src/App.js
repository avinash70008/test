import logo from './logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import RUG from "react-upload-gallery";
import "react-upload-gallery/dist/style.css";

import { initialState } from "./data";



function App() {

  const style = {
    title: {
      textAlign: "center",
      fontFamily: "Helvetica",
      marginTop: 50
    }
  };
  return (
    <>
    <h1>EXTERN LAB</h1>
    <RUG action="http://example.com/upload" initialState={initialState} />
    <h1 style={style.title}>Drag and drop please hold an images and do slide</h1>
  </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);


export default App;
