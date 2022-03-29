import axios from "axios";
import React from "react";

export default function CreateFile() {
  const addFile = (event) => {
    event.preventDefault();
    let file = event.target.file.value;
    let file_content = event.target.file_content.value;
    axios
      .get(`/managefile/createfile/${file}/${file_content}`)
      .then((res) => {
        console.log("created file", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Create File</h2>
      <form onSubmit={addFile}>
        <b>Enter File Name</b>
        <br />
        <input type='text' name='file' />
        <br />
        <b>Enter File Content</b>
        <br />
        <textarea name='file_content'></textarea>
        <br />
        <button className='btn1'>Create</button>
      </form>
    </div>
  );
}
