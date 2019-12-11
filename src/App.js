import React, { Component } from "react";
import "./index.css";
import TodoItems from "./Components/TodoItem/TodoItems";
import AddItem from "./Components/AddItem/AddItem";
class App extends Component {
  state = {
    items: [
      { id: 1, name: "Hamza" },
      { id: 2, name: "Mohamed" },
      { id: 3, name: "kaled" }
    ]
  };

  deletItem = id => {
    let items = this.state.items;
    let i = items.findIndex(item => item.id === id);
    items.splice(i, 1);
    // items.splice(i,1)  slice:efface un élement seulement/// or filter()
    this.setState({ items });
  };
  AddItem = item => {
    let items = this.state.items;
    items.push({ name: item });
    this.setState({ items });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App-Container">
        <h1 className="text-container">TODO App</h1>
        <AddItem AddItem={this.AddItem} />
        <TodoItems items={this.state.items} deletItem={this.deletItem} />

      </div>
    );
  }
}
export default App;
