import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import FavNotes from '../screens/FavNotes';
import NotesList from '../screens/NotesList'

const Navigation = createStackNavigator({
    notes:NotesList,
    favnotes:FavNotes,
    
})

export default createAppContainer(Navigation)