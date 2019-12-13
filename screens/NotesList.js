import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import notesReducer from '../store/reducers/notes'
import { addNotes } from '../store/actions/notes'

const NotesList = props => {
  const [text, setText] = useState('')
  const notes = useSelector(state => state.notes.notes)
  const notesstring = JSON.stringify(notes)
  const dispatch = useDispatch()
  const addNewNotes = (content) => {
    // alert('ggg')
    console.log(content)
    dispatch(addNotes(content))
  }

  const renderItem = ({ item }) => {

    return <View>
      <Text>{item.title}</Text></View>
  }

  const Item = ({ title }) => {
    return (
      <View style={styles.item}>

        <Text style={styles.title}>{title}</Text>
      </View>
    );
  }

  return (<View style={styles.container}>
    <TextInput style={styles.textbox} onChangeText={text => setText(text)} />
    <Button title="ENTER" onPress={() => { addNewNotes(text) }} />
    <Text>{text}</Text>
    <Text>{notesstring}</Text>
    {notes.length > 0 ? <FlatList data={notes} keyExtractor={(item, index) => item.id} renderItem={renderItem} /> : <Text>nothing here</Text>}
  </View>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  },
  textbox: {
    borderColor: 'gray',
    borderWidth: 1,
    width: '90%',
    height: 40
  }
});

export default NotesList
// export default function App() {
//   const rootReducer = combineReducers({notes: notesReducer});
//   const store = createStore(rootReducer);
//   const [text,setText] = useState('')
//   // const [notes, setNotes] = useState([])
//   const notes = useSelector(state => state.notes.notes);
//   console.log('notes',notes)
//   const dispatch = useDispatch()
//   const addNotesHandler = ()=>{

//     dispatch(addNotes(text))
//   }

//   // const renderItem = itemData =>{
//   //   <View><Text>{itemData.item}</Text></View>
//   // }
//   return (
//     <Provider store={store}>
//     <View style={styles.container}>
//       <TextInput style={styles.textbox}
//       onChangeText={text=>setText(text)}
//       />
//       <Button title="enter" onPress={addNotesHandler}/>
//       {notes.length>0 ? <Text>Something here</Text>: <Text>Nothing here</Text>}
//     </View>
//     </Provider>
//   );
// }


