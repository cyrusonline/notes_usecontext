import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { ADD_NOTES, TOGGLE_FAVORITE } from '../context/types'
import NoteItem from '../components/NoteItem';
import { NotesContext } from '../context/notescontext'

const NotesList = props => {
  const [text, setText] = useState('')

  const { state, dispatch } = useContext(NotesContext)
  const notes = state.notes
  const favnotes = state.favNotes



  const addNewNotes = (content) => {

    dispatch({ type: ADD_NOTES, noteContent: content })

  }

  const toggleFav = (item) => {

    dispatch({ type: TOGGLE_FAVORITE, noteId: item.id })


  }

  const renderItem = ({ item }) => {
    const isFav = favnotes.some(note => note.id === item.id)

    return <NoteItem
      title={item.title}
      isFav={isFav}
      onToggleFav={() => { toggleFav(item) }}
    />

  }



  return (<View style={styles.container}>
    <TextInput style={styles.textbox} onChangeText={text => setText(text)} />
    <Button title="ENTER" onPress={() => { addNewNotes(text) }} />
    <Button title="FAVORITES" onPress={() => { props.navigation.navigate('favnotes') }} />

    {/* <FlatList style={{width:'100%'}} data={notes} keyExtractor={(item, index) => item.id} renderItem={renderItem} />  */}
    {notes.length > 0 ? <FlatList style={{ width: '100%' }} data={notes} keyExtractor={(item, index) => item.id} renderItem={renderItem} /> : <Text>nothing here</Text>}
  </View>
  )
}


const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="blue" />
);

NotesList.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'My Notes',
    headerTintColor: 'black',
    headerRight: (

      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
          title="yes"
          iconName='ios-star'
          onPress={() => navigation.navigate('favnotes')}
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

});

export default NotesList



