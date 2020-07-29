import mongoose from 'mongoose'
import {WordSchema} from '../models/word'

const Word = mongoose.model('Word', WordSchema, 'words')

export const addWord = (req, res) => {
  let word = new Word(req.body)
 
  Word.collection.insert(req.body, (err, words) => {
    if(!err) {
      res.json({"success": true})
    }
  })
}

export const findAllWords = (req, res) => {
  Word.find(
    {}, 
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