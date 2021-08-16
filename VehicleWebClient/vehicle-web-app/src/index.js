import React from "react"
import ReactDOM from "react-dom"

//component file
import VehicleComponent from "./components/VehicleContainer"

//stylesheet
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <VehicleComponent />
  </React.StrictMode>,
  document.getElementById("root")
)