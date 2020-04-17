import React, {Component} from 'react'
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainDock from './MainDock';
import DockPage from './DockPage';
import AddCard from './AddCard';
import QuizPage from './QuizPage';
import Result from './Result';
const Stack = createStackNavigator();
export default class MainDockNavigator extends Component {
    render() {
        return (

            <Stack.Navigator initialRouteName="Flashcard">
                <Stack.Screen name="Flashcard" component={MainDock}/>
                <Stack.Screen name="DockPage" component={DockPage}/>
                <Stack.Screen name="AddCard" component={AddCard}/>
                <Stack.Screen name="QuizPage" component={QuizPage}/>
                <Stack.Screen name="Result" component={Result}/>
            </Stack.Navigator>

        )
    }
}
