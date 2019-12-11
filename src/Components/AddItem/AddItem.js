import React, { Component } from "react";
class AddItem extends Component {
  state = {
    name: "",
   
  };
  onChange = event => {
    this.setState({ name: event.target.value });
  };

  HandelSubmit = e => {
    e.preventDefault();
    // console.log(this.state.name);
    this.props.AddItem(this.state.name);
  };
  handelChek=()=>{

  }
  
  render() {
    return (
      <div>
        <p className="para">Add New Item</p>
        <form onSubmit={this.HandelSubmit}>
          <input className="Add-Name"
            type="texte"
            placeholder="Enter the name .."
            id="name"
            onChange={this.onChange}
          />
          <input type="submit" value="Add" />
        </form>
       <input type="checkbox"/>
      </div>
    );
  }
}
export default AddItem;
