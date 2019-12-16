import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList , TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import notesReducer from '../store/reducers/notes'
import { addNotes,toggleFavorite } from '../store/actions/notes'

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

  const alertMessage = (item) =>{
    console.log(JSON.stringify(item))
    alert('alert message')
  }
  const alertSomething = ()=>{
    alert('alert something')
  }

  const renderItem = ({ item }) => {

    return <View style={styles.row}>
      
      <Text>{item.title}</Text>
      <TouchableOpacity onPress={()=>{alertMessage(item)}}>
      <Ionicons name="ios-star" size={32} color="green" />
      </TouchableOpacity>
      </View>
  }

  

  return (<View style={styles.container}>
    <TextInput style={styles.textbox} onChangeText={text => setText(text)} />
    <Button title="ENTER" onPress={() => { addNewNotes(text) }} />
    <Text>{text}</Text>
    <Text>{notesstring}</Text>
    {notes.length > 0 ? <FlatList style={{width:'100%'}} data={notes} keyExtractor={(item, index) => item.id} renderItem={renderItem} /> : <Text>nothing here</Text>}
  </View>)
}

NotesList.navigationOptions = navigationData => {
  console.log(navigationData.navigation.actions)
  return {
    headerTitle: 'headerTitle',
    headerTintColor:'black',
    headerRight:(
      <HeaderButtons>
        <Item
        title="yes"
        iconName='ios-star'
        onPress={()=>navigationData.navigation.actions.navigate('firstscreen')}
        />

       
      </HeaderButtons>
    )
  }
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
  },
  row:{
    flex:1,
    paddingVertical:25,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1
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


