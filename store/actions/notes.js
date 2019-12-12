export const ADD_NOTES = 'ADD_NOTES';
export const addNotes = (content) => {
    return {type:ADD_NOTES, noteContent: content}
}