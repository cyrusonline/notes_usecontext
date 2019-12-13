import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation'
import FirstScreen from '../screens/FirstScreen';
import NotesList from '../screens/NotesList'

const Navigation = createStackNavigator({
    notes:NotesList
})

export default createAppContainer(Navigation)