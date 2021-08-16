import React from "react"
import VehicleItem from "./VehicleItem";

class VehicleList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.vehicles.map(vehicle => (
          //<li key={vehicle.id}>{vehicle.year} {vehicle.make} {vehicle.model}</li>
          <VehicleItem 
          key={vehicle.id}
          vehicle={vehicle}
          
          updateVehicleYear={this.props.updateVehicleYear}
          updateVehicleMake={this.props.updateVehicleMake}
          updateVehicleModel={this.props.updateVehicleModel}
          deleteVehicle={this.props.deleteVehicle}
          />
        ))}
      </ul>
    )
  }
}
export default VehicleList