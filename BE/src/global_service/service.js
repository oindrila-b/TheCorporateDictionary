import mongoose from "mongoose"
import  {Terminology}  from "../database/models/terminology.js"
import { CorporatePhrase } from "../database/models/phrases.js"


export const addNewTerminology = async({title, meaning, definition}) => {
    console.log("Adding new terminology")
    if(title === undefined || title === '' || meaning === undefined || meaning === "" || definition === undefined || definition === "") {
        alert("Please enter valid information")
    } else {
       const newTerminology = new Terminology({title: title, meaning: meaning, definition: definition})
       await newTerminology.save()
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

