import React from 'react';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import notesReducer from './store/reducers/notes'
import Navigation from './navigation/Navigation'
const rootReducer = combineReducers({notes: notesReducer});

const store = createStore(rootReducer);

export default function App() {
 
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

