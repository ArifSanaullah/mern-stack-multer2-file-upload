import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

function App() {
  const [file, setFile] = useState({});
  const [name, setName] = useState("");

  const send = (e) => {
    const data = new FormData();
    data.append("name", name);
    data.append("file", file);

    Axios.post("http://localhost:5000/upload", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  return (
    <div className="App">
      <div className="container bg-white color-primary">
        <form
          action="#"
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="col-12">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="image">Picture</label>
              <input
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
                type="file"
                name="image"
                id="image"
                accept=".png"
                className="form-control"
              />
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary"
                onClick={send}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
