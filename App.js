import React from 'react';
import { StyleSheet} from 'react-native';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import notesReducer from './store/reducers/notes'
import addNotes from './store/actions/notes'
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  },
  textbox:{
    borderColor:'gray',
    borderWidth:1,
    width:'90%',
    height:40
  }
});
