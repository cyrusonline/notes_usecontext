import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList , TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons, HeaderButton, Item } from 'react-navigation-header-buttons';
import { addNotes,toggleFavorite } from '../store/actions/notes'
import NoteItem from '../components/NoteItem';

const NotesList = props => {
  const [text, setText] = useState('')
  const notes = useSelector(state => state.notes.notes)
  const favnotes = useSelector(state => state.notes.favNotes)
 
  const dispatch = useDispatch()
  const addNewNotes = (content) => {

    dispatch(addNotes(content))
  }

  const toggleFav = (item) =>{
    console.log(item.id)
    dispatch(toggleFavorite(item.id))
    
  }
 

  // const renderItem = ({ item }) => {
  //   const existingIndex = favnotes.findIndex(note=>note.id === item.id)
  //   console.log(existingIndex)
  //   return <View style={styles.row}>
      
  //     <Text>{item.title}</Text>
  //     <TouchableOpacity onPress={()=>{toggleFav(item)}}>
  //     <Ionicons name={existingIndex>=0?'ios-star':'ios-star-outline'} size={32} color="green" />
  //     </TouchableOpacity>
  //     </View>
  // }
  const renderItem = ({ item }) => {
    const isFav = favnotes.some(note=>note.id === item.id)
   
    return <NoteItem
      title={item.title}
      isFav={isFav}
      onToggleFav = {()=>{toggleFav(item)}}
    /> 
    
  
  }

  

  return (<View style={styles.container}>
    <TextInput style={styles.textbox} onChangeText={text => setText(text)} />
    <Button title="ENTER" onPress={() => { addNewNotes(text) }} />
    <Button title="FAVORITES" onPress={() => { props.navigation.navigate('favnotes')}} />
   
    
    {notes.length > 0 ? <FlatList style={{width:'100%'}} data={notes} keyExtractor={(item, index) => item.id} renderItem={renderItem} /> : <Text>nothing here</Text>}
  </View>)
}


const IoniconsHeaderButton = passMeFurther => (
  // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
  // and it is important to pass those props to `HeaderButton`
  // then you may add some information like icon size or color (if you use icons)
  <HeaderButton {...passMeFurther} IconComponent={Ionicons} iconSize={23} color="blue" />
);

NotesList.navigationOptions = ({navigation}) => {
  return {
    headerTitle: 'My Notes',
    headerTintColor:'black',
    headerRight:(

      <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
        <Item
        title="yes"
        iconName='ios-star'
        onPress={()=>navigation.navigate('favnotes')}
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



