import React, { Component } from "react";
import "./App.css";

import DinosaurList from "./DinosaurList";
import AddDinoPanel from "./AddDinoPanel";
import EditDinoPanel from "./EditDinoPanel";

class App extends Component {
  state = {
    runningKeyVal: 4,
    editPanelOpen: false,
    editDinoId: null,
    editDinoName: "",
    editDinoColor: "",
    dinosaurData: [
      {
        id: 1,
        dinoName: "Stegosaurus",
        color: "blue",
      },
      { id: 2, dinoName: "Triceratops", color: "pink" },
      { id: 3, dinoName: "T. Rex", color: "green" },
    ],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(`${[e.target.name]} ${this.state[e.target.name]} `);
  };

  toggleEditPanel = (e) => {
    e.preventDefault();
    this.setState({
      editPanelOpen: false,
      editDinoId: null,
      editDinoName: "",
      editDinoColor: "",
    });
  };

  addDinosaur = (e) => {
    e.preventDefault();
    console.log(
      `addDinosaur... ${this.state.editDinoName} ${this.state.editDinoColor}`
    );
    const newDino = {
      id: this.state.runningKeyVal,
      dinoName: this.state.editDinoName,
      color: this.state.editDinoColor,
    };

    this.setState({
      runningKeyVal: this.state.runningKeyVal + 1,
      editDinoId: null,
      editDinoName: "",
      editDinoColor: "",
      dinosaurData: [...this.state.dinosaurData, newDino],
    });
  };

  deleteDinosaur = (id) => {
    console.log(`deleteDinosaur...${id}`);
    const filteredDinoData = this.state.dinosaurData.filter(
      (dinosaur) => dinosaur.id !== id
    );
    this.setState({ dinosaurData: filteredDinoData });
  };

  editDinosaur = (dinosaur) => {
    console.log(`editDinosaur...${dinosaur.dinoName}`);
    this.setState({
      editPanelOpen: true,
      editDinoId: dinosaur.id,
      editDinoName: dinosaur.dinoName,
      editDinoColor: dinosaur.color,
    });
  };

  updateDinosaur = (e) => {
    e.preventDefault();
    const updatedDino = {
      id: this.state.editDinoId,
      dinoName: this.state.editDinoName,
      color: this.state.editDinoColor,
    };

    const updatedDinoData = this.state.dinosaurData.map((dinosaur) =>
      dinosaur.id === this.state.editDinoId ? updatedDino : dinosaur
    );
    this.setState({
      editDinoName: "",
      editDinoColor: "",
      editPanelOpen: false,
      dinosaurData: updatedDinoData,
    });
  };

  render() {
    return (
      <div className="container-outer">
        <h2>Dinosaurs</h2>
        <DinosaurList
          dinosaurData={this.state.dinosaurData}
          deleteDinosaur={this.deleteDinosaur}
          editDinosaur={this.editDinosaur}
        />
        {this.state.editPanelOpen ? (
          <EditDinoPanel
            handleChange={this.handleChange}
            editDinoName={this.state.editDinoName}
            editDinoColor={this.state.editDinoColor}
            updateDinosaur={this.updateDinosaur}
            toggleEditPanel={this.toggleEditPanel}
          />
        ) : (
          <AddDinoPanel
            handleChange={this.handleChange}
            addDinosaur={this.addDinosaur}
            editDinoName={this.state.editDinoName}
            editDinoColor={this.state.editDinoColor}
          />
        )}
      </div>
    );
  }
}

export default App;
