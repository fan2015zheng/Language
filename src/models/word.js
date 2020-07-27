import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const WordSchema = new Schema(
  {
    page: {
      type: String,
      index: true
    },
    key: String,
    English: String,
    Chinese: String,
    Pinyin: String,
    French: String,
    German: String,
  }
)