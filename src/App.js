//import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import { contactData } from "./contactData";
import { TableData } from "./TableData";

function App() {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const searchArray = ["first_name", "last_name", "email", "Phone"];

  const searchFilter = (data) => {
    return data.filter((info) =>
      searchArray.some((arr) => info[arr].toLowerCase().includes(search))
    );
  };

  return (
    <>
      {" "}
      <div className="App">
        <h1 className="text-center mt-4 py-4 fw-bolder">Contact List</h1>
        <input
          type="text"
          className="form-control input-search"
          id="formGroupExampleInput"
          placeholder="Search Contact..."
          onChange={handleChange}
        />

        <TableData contactTable={searchFilter(contactData)} />
      </div>
    </>
  );
}

export default App;
