import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import "./App.css";
import AuthorAdd from "./components/AuthorAdd";
import AuthorEdit from "./components/AuthorEdit";
import AuthorList from "./components/AuthorList";
import axios from "axios";

function App() {
  const [authors, setAuthors] = useState([]);
  const [refresh, setRefresh] = useState(0)


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/authors")
      .then((res) => setAuthors(res.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div className="App">
      <Router>
        <AuthorList path="/"  authors={authors}  refresh={refresh} setRefresh={setRefresh}/>
        <AuthorAdd path="product/add" refresh={refresh} setRefresh={setRefresh} />
        <AuthorEdit path="/:id/edit" refresh={refresh} setRefresh={setRefresh}/>
      </Router>
    </div>
  );
}

export default App;
