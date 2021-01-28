import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";
import { Button, InputGroup } from "../components/utils/utils";

const AuthorAdd = (props) => {
  const [authorName, setAuthorName] = useState("");
  const [errs, setErrs] = useState({})
  const { refresh, setRefresh } = props;
  
  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/authors", {
        authorName: authorName,
      })
      .then((res) => {
        if(res.data.errors) {
          setErrs(res.data.errors);
        } else {
          setRefresh(refresh + 1)
          navigate("/");
        }
      })
      .catch((err) => console.log(err))
  }

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/">Home</Link>
      <p className="instruction">Add a new author:</p>
      <div className="addInput">
        <form onSubmit={submitForm}>
          <div>
            <InputGroup
              label="Author's Name:"
              value={authorName}
              type="text"
              handleChange={setAuthorName}
              name="Author's Name"
            />
            {errs.authorName ? (
              <span style={{ color: "red" }}>{errs.authorName.message}</span>
            ) : null }
          </div>
          <Button>
            <Link to="/">Cancel</Link>
          </Button>
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AuthorAdd;
