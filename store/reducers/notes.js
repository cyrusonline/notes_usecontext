import {ADD_NOTES} from '../actions/notes'

const initialState = {
    notes:[],
    favNotes:[]
}

const notesReducer = (state = initialState, action) => {
    switch (action) {
        case ADD_NOTES:
            const newNote = {
                id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5),
                content:action.content
            }
            const existingNotes = [...state.notes]
            existingNotes.concat(newNote)
            console.log(existingNotes)
            return {...state,notes:existingNotes}
            break;
    
        default:
            return state
            break;
    }
}

export default notesReducer