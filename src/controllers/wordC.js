import mongoose from 'mongoose'
import {WordSchema} from '../models/word'

const Word = mongoose.model('Word', WordSchema, 'words')

export const addWord = (req, res) => {
  Word.collection.insert(req.body, (err, words) => {
    if(!err) {
      res.json({"success": true})
    }
  })
}

export const findWordsByPagePattern = (req, res) => {

  Word.find(
    {page: {$regex: new RegExp("^"+req.params.lesson)}}, 
    (err, words) => {
      res.json(words)
    }
  )
}

export const findWordsByPage = (req, res) => {
  Word.find(
    {page: req.params.page}, 
    (err, words) =>{
      res.json(words)
    }
  )
}