import {ADD_NOTES, TOGGLE_FAVORITE} from '../actions/notes'
import Note from  '../../models/note'
const NOTES = [
    new Note('c1','Cyrus'),
    new Note('c2','Stephen'),
    new Note('c3','Sam'),
]
const initialState = {
    notes:NOTES,
    favNotes:[]
}

const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTES:
            console.log('new notes detected in reduce')
            const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            const newNote  = new Note(id, action.noteContent)
            console.log(newNote)
            const existingNotes = [...state.notes]
            // existingNotes = existingNotes.concat(newNote)
            console.log(existingNotes)
            return {...state,notes:existingNotes.concat(newNote)}
            break;
        case TOGGLE_FAVORITE:
            console.log('toggle favorite');
            break;
    
        default:
            return state
            break;
    }
}

export default notesReducer