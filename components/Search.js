import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card} from 'native-base';
import Unsplash from 'unsplash-js';


class Search extends Component {

  static navigationOptions = {
      title: 'Pronóstico Actual',
      header: navigation => ({
        titleStyle: {
          color: '#FFFFFF'
        },
        tintColor: '#0087B7'
      })
    }
  constructor(props) {
    super(props);
    this.state = {
      query: "",
  }
}

handleSearchInput = query => {
  this.setState(() => ({
      query
    }));
};

  findUser = (query) => {
    console.log("query:", query)
    this.setState(() => ({
        query:""
      }));
    this.props.navigation.navigate("User List",{
      query,
      }
    );
};

  render ()  {
    if (this.state.isLoading){
      return (
        <View>
        <ActivityIndicator size="small" color="#00ff00" />
        </View>
      )
    }
    const {query, username}= this.state;
      return (
        <View style={styles.containers}>
        <Image
        style={styles.tinyLogo}
          source={require('../assets/uns.png')}
        />
        <TextInput
        style={styles.searchBox}
        label="Enter a photographer name"
        value={query}
        onChangeText={this.handleSearchInput}
      />
      <Button
        title={'Search'}
        style={styles.inputButton}
        onPress={() => this.findUser(query)}

      ><Text style={styles.signUpText}>Search</Text></Button>
          <StatusBar style="auto" />
        </View>
      );
  }
  }

export default Search;

const styles = StyleSheet.create({
  containers: {
    backgroundColor: "#000",
    height: 700,


  },
  searchBox: {
    marginLeft: 30,
    marginRight: 50,
    borderRadius: 15,

  },
  inputButton: {
    marginTop: 20,
    marginLeft: 25,
    width: 300,
    height: 44,
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'black',
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#DD095F",
  },
  signUpText:{
    color: 'white',
    marginLeft: 110,
    fontFamily: 'AppleSDGothicNeo-Light',
    fontSize: 18,
  },
  tinyLogo: {
    width: 200,
    height: 200,
    marginLeft: 60,
    resizeMode: 'contain'
  },
});
