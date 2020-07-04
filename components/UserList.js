import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator ,  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card, Image, CardItem, } from 'native-base';
import Unsplash from 'unsplash-js';
import fetch from 'node-fetch';
import Search from './Search';

const unsplash = new Unsplash({
  accessKey: "O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A",
  secretKey: "G64PsdPQVQ5dHLKQPcXQFz3pFHlwrmXLUaBwWRfame8"
});

class UserList extends Component {

  // static navigationOptions = ({ route, navigation }) => ({
  //     query: route.params.query,
  //   });
    //console.log(" KKKKKKKKKKKKKK<-this is query: ",query)
    //<Text style ={styles.text}>{showSearchUsers}</Text>
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
        showSearchUsers: [],
    }
  }


  componentDidMount() {
    const query  = this.props.route.params.query;
    const url = "https://api.unsplash.com/search/users?page=1&client_id=O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A&query=" + query ;
    const showSearchUsers = this.state
    return(
      fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          showSearchUsers: this.state.showSearchUsers.push(responseJson.results)
        })
        //console.log("SSSSS->responseJSON*:", showSearchUsers)
        console.log(" URL :", url)
        console.log("---------------- ---------------- ----------------:")
      //  console.log("this is C query: ",query);
        })
      .catch(error => console.error(error))
    )
  }
    _KeyExtractor = (dataSource, index) => dataSource.email;

  render (){
   const {showSearchUsers} = this.state;
    console.log("RENDER :", showSearchUsers)

    //console.log(" K<-this is showSearchUsers: ", showSearchUsers)
    //console.log(" KKKKKKKKKKKKKK<-this is query: ", query)
    return (
      <View>
      <Text>{showSearchUsers}</Text>
      </View>
    //   <FlatList
    //       data={this.state.showSearchUsers}
    //       keyExtractor={this._KeyExtractor}
    //       renderItem={({ item }) => (
    //
    //   <Card>
    //     <CardItem>
    //       <View>
    //         <Image
    //         source ={{
    //           uri : item.profile_image.medium
    //         }}
    //         />
    //       </View>
    //       <View>
    //         <Text>Name: {item.name}</Text>
    //       </View>
    //       </CardItem>
    //   </Card>
    //     )
    //   }
    // />
    );
  }
}
export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
});
