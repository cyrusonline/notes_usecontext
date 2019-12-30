import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import { useDispatch,useSelector } from 'react-redux'
import NoteItem from '../components/NoteItem';
import { toggleFavorite } from '../store/actions/notes'



const FavNotes = props => {

     const favnotes = useSelector(state => state.notes.favNotes)
     const dispatch = useDispatch()
     const toggleFav = (item) =>{
        dispatch(toggleFavorite(item.id))
        
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