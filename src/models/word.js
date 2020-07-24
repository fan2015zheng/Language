import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const WordSchema = new Schema(
  {
    page: {
      type: Number,
      index: true
    },
    image: String,
    English: {
      spell: String,
      audio: String
    },
    Chinese: {
      spell: String,
      audio: String
    },
    French: {
      spell: String,
      audio: String
    },
    German: {
      spell: String,
      audio: String
    }
  }
)