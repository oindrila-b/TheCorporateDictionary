import mongoose, {Schema} from 'mongoose'

const corporatePhrase = new Schema({
    title: String,
    meaning: String,
})

export const CorporatePhrase = mongoose.model('CorporatePhrase', corporatePhrase)