import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator ,  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card, Image } from 'native-base';
import Unsplash from 'unsplash-js';

const unsplash = new Unsplash({
  accessKey: "O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A",
  secretKey: "G64PsdPQVQ5dHLKQPcXQFz3pFHlwrmXLUaBwWRfame8"
});

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      showSearchUsers: [],
  }
}


handleSearchInput = query => {
  console.log("this is A  input query: "+query)
  this.setState(() => ({
      query

    }));

};

  findUser = (query) => {

    const showSearchUsers = this.state;
    console.log("$$$$ URL ---------------- ---------------- ---------------- ----------------:")
    console.log("this is C query: ",query);
    //console.log("this is FFF showSearchUsers: "+showSearchUsers)

    //const url = "https://api.unsplash.com/search/users?page=1&query=ali&client_id=O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A";
    const url = "https://api.unsplash.com/search/users?page=1&client_id=O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A&query="+query ;
    this.setState(() => ({
      query: ""
    }));
    

      return (
        fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            isLoading: false,
            showSearchUsers: this.state.showSearchUsers.push(responseJson.results)
          })
          console.log("responseJSON ***:", showSearchUsers)
          console.log("$$$$ URL :", url)
          console.log("$$$$ URL ---------------- ---------------- ---------------- ----------------:")
          console.log("this is C query: ",query);
          })
        .catch(error => console.error(error))
      )


};

    // componentDidMount() {
    // 	this.findUser();
    // }

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
        <TextInput
        label="Enter an artist name"
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
    marginTop: 30,
  },
  inputButton: {
    marginTop: 10,
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
});
