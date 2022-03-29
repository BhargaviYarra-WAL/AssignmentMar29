import axios from "axios";
import React from "react";

export default function CreateFolder() {
  const addDirectory = (event) => {
    event.preventDefault();
    let foldername = event.target.foldername.value;
    axios
      .get(`/managefile/createdirectory/${foldername}`)
      .then((res) => {
        console.log("created folder", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='container'>
      <h2>Create Folder</h2>
      <form onSubmit={addDirectory}>
        <b>Enter Folder Name</b>
        <br />
        <input type='text' name='foldername' />
        <br />
        <button className='btn1'>Create</button>
      </form>
    </div>
  );
}
