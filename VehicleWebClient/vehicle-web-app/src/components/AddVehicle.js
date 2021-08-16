import React, { Component } from "react"

class AddVehicle extends Component {
  state= {
    year: "",
    make: "",
    model: ""
  }
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    //console.log(this.state.title);
    if (this.state.year.trim() &&
        this.state.make.trim() &&
        this.state.model.trim() 
       ) {
      this.props.addVehicle(this.state.year, this.state.make, this.state.model)
      this.setState({
        year: "",
        make: "",
        model: ""
      })
    } else {
      alert("Please provide all fields")
    }

   
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <input 
          type="text"
          className="input-text" 
          placeholder="Add Year..." 
          value={this.state.year}
          name="year"
          onChange={this.onChange}
        />

        <input 
          type="text"
          className="input-text" 
          placeholder="Add Make..." 
          value={this.state.make}
          name="make"
          onChange={this.onChange}
        />

      <input 
          type="text"
          className="input-text" 
          placeholder="Add Model..." 
          value={this.state.model}
          name="model"
          onChange={this.onChange}
        />

        <button>Submit</button>
      </form>
    )
  }
}
export default AddVehicle