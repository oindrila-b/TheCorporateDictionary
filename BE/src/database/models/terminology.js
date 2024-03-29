import mongoose, {Schema} from 'mongoose'

const corporateTerminology = new Schema({
    title: String,
    meaning: String
})

export const CorporateTerm = mongoose.model('CorporateTerm', corporateTerminology)