import React from "react";

const DinosaurList = (props) => {
  const dinoList = props.dinosaurData.map((dinosaur) => (
    <tr key={`dino_${dinosaur.id}`}>
      <td>{dinosaur.id}</td>
      <td>{dinosaur.dinoName}</td>
      <td>{dinosaur.color}</td>
      <td>
        <button onClick={() => props.editDinosaur(dinosaur)}>Edit</button>
      </td>
      <td>
        <button onClick={() => props.deleteDinosaur(dinosaur.id)}>
          Delete
        </button>
      </td>
    </tr>
  ));
  return (
    <div className="container-inner">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{dinoList}</tbody>
      </table>
    </div>
  );
};
export default DinosaurList;
