import { StatusBar } from 'expo-status-bar';
import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import UserList from './components/UserList';
import Detail from './components/Detail';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {Provider, connect} from 'react-redux'
import reducer from './reducers/index';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const Stack = createStackNavigator();

export default class App extends Component{


render (){
  const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store = {store}>
        <NavigationContainer >
          <Stack.Navigator
          >

              <Stack.Screen name="Search" component={Search}/>
              <Stack.Screen name="User List" component={UserList}/>
              <Stack.Screen name="Detail" component={Detail}/>

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>



    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
