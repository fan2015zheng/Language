import mongoose from 'mongoose'
import {WordSchema} from '../models/word'
import { ObjectId } from 'mongodb'

const Word = mongoose.model('Word', WordSchema, 'words')

export const addWord = async (req, res) => {
  
  const words = req.body
  const oldWords = []
  const newWords = []
  for(let i=0; i<words.length; i++) {
    const w = words[i]
    if (w._id) {
      oldWords.push(w)
    }
    else {
      newWords.push(w)
    }
  }

  let success = true
  for(let i=0; i<oldWords.length; i++) {
    const w = oldWords[i]

    await Word.findOneAndUpdate(
      {"_id": new ObjectId(w._id)}, 
      {
        $set: {
          page: w.page,
          key: w.key,
          English: w.English,
          Chinese: w.Chinese,
          Pinyin: w.Pinyin,
          French: w.French,
          German: w.German,
          admin: 1
        },
      }, (err) => {
      if(err) {
        success = false
      }
    })
  }
  
  if (newWords.length > 0) {
    Word.collection.insert(newWords, (err) => {
      if(err) {
        success = false
      }
    })
  }

  res.json({"success": success})
}

export const findWordsByLesson = (req, res) => {

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