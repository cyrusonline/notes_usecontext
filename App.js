import React, { useReducer } from 'react';
import notesReducer from './context/notesreducer'
import Navigation from './navigation/Navigation'
import { NotesContext } from './context/notescontext'
import Note from './models/note'
// const rootReducer = combineReducers({notes: notesReducer});

// const store = createStore(rootReducer);

export default function App() {

  const NOTES = [
    new Note('c1', 'Buying Milk'),
    new Note('c2', 'Going to School'),
    new Note('c3', 'Watch Neflix'),
  ]
  const initialState = {
    notes: NOTES,
    favNotes: []
  }

  const [state, dispatch] = useReducer(notesReducer, initialState)

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      <Navigation />
    </NotesContext.Provider>
  );
}

