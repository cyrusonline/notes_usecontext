export const ADD_NOTES = 'ADD_NOTES';
export const addNotes = (content) => {
    console.log('add notes in action')
    return {type:ADD_NOTES, noteContent: content}
}