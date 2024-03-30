import mongoose, {Schema} from 'mongoose'

const terminology = new Schema({
    title: String,
    meaning: String,
    definition: String
})

export const Terminology = mongoose.model('Terminology', terminology)