import axios from "axios";
import React from "react";
import { useState } from "react";

export default function ModifyFile() {
  let [filecontent, setFilecontent] = useState();
  let [filename, setFilename] = useState();
  const getFileData = (event) => {
    event.preventDefault();
    let file = event.target.filename.value;
    setFilename(file);
    axios
      .get(`/managefile/readfile/${file}`)
      .then((res) => {
        console.log(res);
        setFilecontent(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const modifyData = () => {
    axios
      .get(`/managefile/createfile/${filename}/${filecontent}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className='container'>
      <h1>Modify Data</h1>

      <form onSubmit={getFileData}>
        <b>Enter File Name</b>
        <br />
        <input type='text' name='filename' />
        <br />
        <input type='submit' name='submit' />
      </form>
      <textarea
        name='filecontent'
        value={filecontent}
        onChange={(event) => {
          setFilecontent(event.target.value);
        }}
        placeholder='wait..'
      ></textarea>
      <br />
      <button onClick={modifyData}>Modify</button>
    </div>
  );
}
