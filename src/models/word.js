import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const WordSchema = new Schema(
  {
    Page: {
      type: Number,
      index: true
    },
    English: {
      Spell: String,
      Audio: String
    },
    Chinese: {
      Spell: String,
      Audio: String
    },
    French: {
      Spell: String,
      Audio: String
    },
    German: {
      Spell: String,
      Audio: String
    },
    Image: String
  }
)