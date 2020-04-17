import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers'
import 'react-native-gesture-handler';
import AppStatusBar from './components/AppStatusBar';
import MainDock from './components/MainDock';
import DockPage from './components/DockPage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddDock from './components/AddDock'
import {FontAwesome, Ionicons} from '@expo/vector-icons';
import MainDockNavigator from './components/MainDockNavigator';
import {setLocalNotification} from './helpers/NotificationHelper';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: Platform.OS === "ios"
    ? "purple"
    : "white",
  style: {
    height: 70,
    showLabel: false,
    backgroundColor: Platform.OS === "ios"
      ? "white"
      : "purple",
    shadowColor: 'rgba(0,0,0,0.24)',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 6,
    shadowOpacity: 1
  }
}
export default class App extends Component {
  componentDidMount() {
    setLocalNotification();
  }
  render() {
    return (
      <Provider store={createStore(reducer)}>

        <AppStatusBar backgroundColor="purple" barStyle='light-content'/>
        <NavigationContainer>
          <Tab.Navigator tabBarOptions={tabBarOptions}>
            <Tab.Screen
              options={{
              tabBarLabel: 'Flashcard',
              tabBarIcon: ({tintColor}) =>< Ionicons name = "ios-bookmarks" size = {
                30
              }
              color = {
                tintColor
              } />
            }}
              name="MainDockNavigator"
              component={MainDockNavigator}/>
            <Tab.Screen
              options={{
              tabBarLabel: 'AddDock',
              tabBarIcon: ({tintColor}) =>< FontAwesome name = "plus-square" size = {
                30
              }
              color = {
                tintColor
              } />
            }}
              name="AddDock"
              component={AddDock}/>
          </Tab.Navigator>
        </NavigationContainer>
        {/* <NavigationContainer>
        <Stack.Navigator initialRouteName="Flashcard">
          <Stack.Screen name="Flashcard" component={MainDock}/>
          <Stack.Screen name="DockPage" component={DockPage}/>
        </Stack.Navigator>
      </NavigationContainer> */}

      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

{/* <View style={styles.container}>

<MainDock/>
</View> */
}