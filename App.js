import { StatusBar } from 'expo-status-bar';
import React , { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './components/Search';
import UserList from './components/UserList';
import { createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default class App extends Component{


render (){
  //const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));
  return (

        <NavigationContainer >
          <Stack.Navigator>

              <Stack.Screen name="Search" component={Search}/>
              <Stack.Screen name="UserList" component={UserList}/>

          </Stack.Navigator>
        </NavigationContainer>



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
