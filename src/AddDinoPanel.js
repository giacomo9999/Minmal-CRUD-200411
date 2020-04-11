import React from "react";

const AddDinoPanel = (props) => {
  return (
    <div className="container-inner">
      <h2>Add Dinosaur</h2>
      <form className="h-form" onSubmit={props.addDinosaur}>
        <label className="h-label">Name</label>
        <input
          className="h-input"
          type="text"
          name="editDinoName"
          value={props.editDinoName}
          onChange={props.handleChange}
        />
        <label className="h-label">Color</label>
        <input
          className="h-input"
          type="text"
          name="editDinoColor"
          value={props.editDinoColor}
          onChange={props.handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddDinoPanel;
