import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator ,  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card, Image, CardItem, } from 'native-base';
import Unsplash from 'unsplash-js';
import fetch from 'node-fetch';
global.fetch = fetch;


const unsplash = new Unsplash({
  accessKey: "O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A",
  secretKey: "G64PsdPQVQ5dHLKQPcXQFz3pFHlwrmXLUaBwWRfame8"
});

class UserList extends Component {

  static navigationOptions = ({ route }) => ({
      query: route.params.query,
    });
  //const Unsplash = require('unsplash-js').default;
  state = {
      showSearchUsers: [],
      isLoading: false,
    }


//s_
  userListFetch = () => {
    const query = this.props;
    const showSearchUsers = this.state;
    console.log("this is C query: "+query);
    console.log("this is FFF showSearchUsers: "+showSearchUsers)

    //const url = "https://api.unsplash.com/search/users?page=1&query=ali&client_id=O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A";
    const url = "https://api.unsplash.com/search/users?page=1&query=ali&client_id=O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A";

      return (
        fetch(url)
        .then(response => response.json())
        .then(responseJson => {
          this.setState({
            isLoading: false,
            //showSearchUsers: this.state.showSearchUsers.concat(responseJson.results)
          })
          console.log("responseJSON ***:",+responseJson.results)
        })
        .catch(error => console.error(error))
      )
    };

componentDidMount() {
  this.userListFetch()
}

  //_KeyExtractor = (datasource, index) => datasource.id;
  ////showSearchUsers : this.state.showSearchUsers.concat(responseJson.results)
  render (){
    const { showSearchUsers } = this.state;
    console.log(" <-this is showSearchUsers: "+showSearchUsers.name)
    return (
      <View>
      <Text>you</Text>
      </View>
    //   <FlatList
    //       data={showSearchUsers}
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
    //
    //       </View>
    //
    //       <View>
    //         <Text>Name: {item.name}</Text>
    //       </View>
    //       </CardItem>
    //   </Card>
    //     )
    //   }
    //
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
});
