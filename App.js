import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button, FlatList} from 'react-native';
import {createStore, combineReducers} from 'redux'
import {Provider, useSelector, useDispatch} from 'react-redux'
import notesReducer from './store/reducers/notes'
import addNotes from './store/actions/notes'
import Navigation from './navigation/Navigation'
const rootReducer = combineReducers({notes: notesReducer});

const store = createStore(rootReducer);

export default function App() {
  // const dispatch = useDispatch()

  // const [text,setText] = useState('')
  // const [notes, setNotes] = useState([])
  // const notes = useSelector(state => state.notes.notes);
  // console.log('notes',notes)
  // const addNotesHandler = ()=>{

  //   dispatch(addNotes(text))
  // }

  // const renderItem = itemData =>{
  //   <View><Text>{itemData.item}</Text></View>
  // }
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
