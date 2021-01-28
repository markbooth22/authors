const { request, response } = require("express");
const Author = require("../models/author.model");


module.exports = {
  getAll: (req, res) => {
    Author.find()
      .sort("authorName")
      .then((allAuthors) => res.json(allAuthors))
      .catch((err) => {
        console.log(`Error getting all Author documents: ${err}`)
        res.json(err)
      })
  },
  create: (req, res) => {
    console.log(req.body);
    Author.create(req.body)
      .then((newAuthorObject) => res.json(newAuthorObject))
      .catch((err) => {
        console.log(`Error creating all Author documents: ${err}`)
        res.json(err)
      })
  },
  getOne: (req, res) => {
    Author.findById(req.params.id)
      .then((oneAuthor) => res.json(oneAuthor))
      .catch((err) => {
        console.log(`Error getting a single Author documents: ${err}`)
        res.json(err)
      })
  },
  update: (req, res) => {
    Author.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then((updatedAuthor) => res.json(updatedAuthor))
      .catch((err) => {
        console.log(`Error updating a single Author documents: ${err}`)
        res.json(err)
      })
  },
  delete: (req, res) => {
    Author.findByIdAndDelete(req.params.id)
      .then((deleted) => res.json(deleted))
      .catch((err) => {
        console.log(`Error deleting a single Author documents: ${err}`)
        res.json(err)
      })
  },
}

