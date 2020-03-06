import React, {useContext} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import NoteItem from '../components/NoteItem';
import {NotesContext} from '../context/notescontext'
import {TOGGLE_FAVORITE} from '../context/types'


const FavNotes = () => {
      const {state,dispatch} = useContext(NotesContext)
     const favnotes = state.favNotes
     const toggleFav = (item) =>{
        dispatch({type:TOGGLE_FAVORITE, noteId: item.id})
        
      }
     const renderItem = ({ item }) => {
        const isFav = favnotes.some(note=>note.id === item.id) 
        return <NoteItem
          title={item.title}
          isFav={isFav}
          onToggleFav = {()=>{toggleFav(item)}}
        /> 
        
      
      }
    return (<View style={styles.container}>
        <FlatList style={{width:'100%'}} data={favnotes} keyExtractor={(item, index) => item.id} renderItem={renderItem} />
        </View>
    )
}

FavNotes.navigationOptions = ()=>{
    return{
        headerTitle:'Favorites'
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      paddingTop: 50
    },
 
  
  });
export default FavNotes