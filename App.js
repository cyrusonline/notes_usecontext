import React, {useState} from 'react';
import { StyleSheet, Text, View , TextInput, Button, FlatList} from 'react-native';
import {createStore, combineReducers} from 'redux'
import {Provider, useSelector, useDispatch} from 'react-redux'
import notesReducer from './store/reducers/notes'
import addNotes from './store/actions/notes'
export default function App() {
  const rootReducer = combineReducers({notes: notesReducer});
  const store = createStore(rootReducer);
  const [text,setText] = useState('')
  // const [notes, setNotes] = useState([])
  const notes = useSelector(state => state.notes.notes);
  console.log('notes',notes)
  const dispatch = useDispatch()
  const addNotesHandler = ()=>{
    // const updated_notes = [...notes]
    // const id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
    // console.log(id)
    // setNotes(notes.concat(text))
    // console.log(notes)
    dispatch(addNotes(text))
  }

  const renderItem = itemData =>{
    <View><Text>{itemData.item}</Text></View>
  }
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <TextInput style={styles.textbox}
      onChangeText={text=>setText(text)}
      />
      <Button title="enter" onPress={addNotesHandler}/>
      {notes.length>0 ? <Text>Something here</Text>: <Text>Nothing here</Text>}
    </View>
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
