import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function FolderContents() {
  let [files, setFiles] = useState([]);
  useEffect(() => {
    getFiles();
  });
  const getFiles = () => {
    axios
      .get("/managefile/readfiles")
      .then((res) => {
        console.log(res.data);
        setFiles(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteFolder = (dirname) => {
    axios
      .get(`/managefile/deletefolder/${dirname}`)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    getFiles();
  };
  return (
    <div>
      <h2> Files List</h2>
      <table className='center'>
        <tr>
          <th>File Name</th>
          <th>Delete</th>
        </tr>
        {files.map((val) => {
          return (
            <tr>
              <td>{val}</td>
              <td>
                <button
                  onClick={() => {
                    deleteFolder(val);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
