import mongoose from 'mongoose'
import {WordSchema} from '../models/word'

const Word = mongoose.model('Word', WordSchema, 'words')

export const addWord = (req, res) => {
  let word = new Word(req.body)
  
  word.save((err, word2) => {
    res.json(word2)
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