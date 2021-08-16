import React from "react"
import axios from 'axios'
import Header from "./Header"
import VehicleList from "./VehicleList"
import AddVehicle from "./AddVehicle"

class VehicleComponent extends React.Component {

  state={
    /*vehicles: [
      {
        id: 1,
        year: 2020,
        make: "Nissan",
        model: "Skyline"
      },
      {
        id: 2,
        year: 2020,
        make: "Nissan",
        model: "240sx"
      },
      {
        id: 3,
        year: 2020,
        make: "Nissan",
        model: "300z"
      },
      {
        id: 4,
        year: 2020,
        make: "Nissan",
        model: "Silvia"
      },
    ]*/
    vehicles: []
  };

  componentDidMount() {
  fetch("http://localhost:8080/api/vehicles")
      .then(response => response.json())
      .then(data => this.setState({ vehicles: data }));
  }


  //Add Vehicle
  addVehicle = (year, make, model) => {
    console.log(year + " " + make + " " + model);
    const newVehicle = {
      year: year,
      make: make,
      model: model
    };
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': 86400
    };
    axios.post("http://localhost:8080/api/vehicles", newVehicle, { headers })
      .then(response => this.setState({
        vehicles: [...this.state.vehicles, newVehicle]
      }))
      .catch(error=> {
        console.error('There was an error!', error);
        alert("There was an error adding vehicle", error)
      });
      
      

      /*this.setState({
        vehicles: [...this.state.vehicles, newVehicle]
      });*/
  };

  //Update the vehicle
  updateVehicleYear = (updatedYear, id) => {
    //console.log(updatedYear, id)
    this.setState({
      todos: this.state.vehicles.map(vehicle => {
        if (vehicle.id === id) {
          vehicle.year = updatedYear
        }
        return vehicle
      }),
    })
  }

  updateVehicleMake = (updatedMake, id) => {
   //console.log(updatedMake, id)
    this.setState({
      todos: this.state.vehicles.map(vehicle => {
        if (vehicle.id === id) {
          vehicle.make = updatedMake
        }
        return vehicle
      }),
    })
  }

  updateVehicleModel = (updatedModel, id) => {
    //console.log(updatedModel, id)
    this.setState({
      todos: this.state.vehicles.map(vehicle => {
        if (vehicle.id === id) {
          vehicle.model = updatedModel
        }
        return vehicle
      }),
    })
  }

  //Delete the vehicle
  deleteVehicle = id => {
    console.log("deleted", id);
    axios.delete("http://localhost:8080/api/vehicles/"+id)
      .then(()=>
      this.setState({
        vehicles: [
          ...this.state.vehicles.filter(vehicle => {
            return vehicle.id !== id;
          })
        ]
      })
      )
    /*this.setState({
      vehicles: [
        ...this.state.vehicles.filter(vehicle => {
          return vehicle.id !== id;
        })
      ]
    });*/
  };

  render() {
    return (
      /*<div>
        <h1>Hello from Create React App</h1>
        <p>I am in a React Component!</p>
      </div>*/


      <div className="container"> 
      <div className="inner">
        <Header />
        <VehicleList
          vehicles={this.state.vehicles} 
          
          updateVehicleYear={this.updateVehicleYear}
          updateVehicleMake={this.updateVehicleMake}
          updateVehicleModel={this.updateVehicleModel}
          deleteVehicle={this.deleteVehicle}
        />
        <br></br>
        <AddVehicle addVehicle={this.addVehicle} />
      </div>
     </div>

    )
  }
}
export default VehicleComponent