export const ADD_NOTES = 'ADD_NOTES';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const addNotes = (content) => {
    return {type:ADD_NOTES, noteContent: content}
}

export const toggleFavorite = id => {
    return {type:TOGGLE_FAVORITE, noteId: id}
}