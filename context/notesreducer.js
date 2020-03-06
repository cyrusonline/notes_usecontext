import {ADD_NOTES,TOGGLE_FAVORITE} from './types'
import Note from '../models/note'
const notesReducer = (state, action) => {
    switch (action.type) {
        case ADD_NOTES:
            const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5)
            const newNote  = new Note(id, action.noteContent)
            const existingNotes = [...state.notes]
            return {...state,notes:existingNotes.concat(newNote)}
            break;
        case TOGGLE_FAVORITE:

            const existingIndex = state.favNotes.findIndex(note => note.id === action.noteId)
            if (existingIndex>=0) {
                const updatedFavNotes = [...state.favNotes]
                updatedFavNotes.splice(existingIndex,1)
                return {...state,favNotes:updatedFavNotes}
            } else {
                const note = state.notes.find(note => note.id===action.noteId)
                return {...state,favNotes:state.favNotes.concat(note)}
            }
            break;
    
        default:
            return state
            break;
    }
}

export default notesReducer