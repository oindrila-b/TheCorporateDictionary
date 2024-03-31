import mongoose from "mongoose"
import { Terminology } from "../database/models/terminology"
import { CorporatePhrase } from "../database/models/phrases"


export const addNewTerminology = async({title, meaning, definition}) => {
    console.log("Adding new terminology")
    if(title === undefined || title === '' || meaning === undefined || meaning === "" || definition === undefined || definition === "") {
        alert("Please enter valid information")
    } else {
        const newTerm = new Terminology(title, meaning, definition)
        return await newTerm.save()
    }
    
}

export const addNewCorporatePhrase= async({title, meaning}) => {
    console.log("Adding new terminology")
    if(title === undefined || title === '' || meaning === undefined || meaning === "" ) {
        alert("Please enter valid information")
    } else {
        const newPhrase = new CorporatePhrase(title, meaning)
        await newPhrase.save()
    }
    
}

export const getTerminology = async({term}) => {
    
}

