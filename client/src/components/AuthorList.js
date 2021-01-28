import React, { useState, useEffect } from "react";
import { navigate, Link } from "@reach/router";
import axios from "axios";

const AuthorList = (props) => {
  const { authors } = props;
  const { refresh, setRefresh } = props;

  const deleteAuthor = (id) => {
    axios
      .delete(`http://localhost:8000/api/authors/${id}`)
      .then((res) => {
        setRefresh(refresh + 1);
        console.log("Response: ", res);
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <div>
      <h1>Favorite Authors</h1>
      <Link to="/product/add">Add an Author</Link>
      <p className="instruction">We have quotes by:</p>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions Available</th>
          </tr>
        </thead>

        {authors.map((author, idx) => {
          return (
            <tbody>
              <tr key={idx}>
                <td>{author.authorName}</td>
                <td>
                  <button className="editButton">
                    <Link to={`/${author._id}/edit`}>Edit</Link>
                  </button>{" "}
                  <button
                    className="deleteButton"
                    onClick={(e) => {
                      deleteAuthor(author._id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default AuthorList;
