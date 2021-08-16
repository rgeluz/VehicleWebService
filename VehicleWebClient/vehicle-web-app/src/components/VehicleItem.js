import React from "react"
import styles from "./VehicleItem.module.css"

class VehicleItem extends React.Component {


  state = {
    editing: false,
  }

  handleEditing = () => {
    console.log("edit mode activated")
    this.setState({
      editing: true,
    })
  }
  handleUpdatedDone = event => {
    //console.log(event.key)
    if (event.key === "Enter") {
      this.setState({ editing: false })
    }
  }
  componentWillUnmount() {
    console.log("Cleaning up...")
  }


  render(){

    const { id, year, make, model } = this.props.vehicle


    //edit vehicle
    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return(
      <li className={styles.item}>
        <div style={viewMode}>
          <button onClick={() => this.handleEditing()}>
              Edit
          </button>
          <button onClick={() => this.props.deleteVehicleProps(this.props.vehicle.id)}>
              Delete
          </button>
          {year} {make} {model}
        </div>
        <input 
          type="text" 
          style={editMode} 
          className={styles.textInput}
          value={year}
          onChange={e => {
            //console.log(e.target.value, id)
            this.props.updateVehicleYear(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone} 
        />
        <input 
          type="text" 
          style={editMode} 
          className={styles.textInput}
          value={make}
          onChange={e => {
            //console.log(e.target.value, id)
            this.props.updateVehicleMake(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone} 
        />
        <input 
          type="text" 
          style={editMode} 
          className={styles.textInput}
          value={model}
          onChange={e => {
            //console.log(e.target.value, id)
            this.props.updateVehicleModel(e.target.value, id)
          }}
          onKeyDown={this.handleUpdatedDone} 
        />
      </li>
    )
  }

}
export default VehicleItem