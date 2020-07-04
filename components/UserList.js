import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator , SafeAreaView  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card, Image, CardItem, } from 'native-base';
import Unsplash from 'unsplash-js';
import fetch from 'node-fetch';
import Search from './Search';
import {receiveProfiles} from '../actions/index';
import {connect} from 'react-redux';


const unsplash = new Unsplash({
  accessKey: "O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A",
  secretKey: "G64PsdPQVQ5dHLKQPcXQFz3pFHlwrmXLUaBwWRfame8"
});

class UserList extends Component {

  static navigationOptions = ({ route, navigation }) => ({
      query: route.params.query,
    })
    //console.log(" KKKKKKKKKKKKKK<-this is query: ",query)
    //<Text style ={styles.text}>{profiles}</Text>
    constructor(props) {
      super(props);
      this.state = {
        loading: true,

    }
  }


  componentDidMount() {
    const query  = this.props.route.params.query;
    const url = "https://api.unsplash.com/search/users?page=1&client_id=O63JiddBj-CpNQtHKZTTEp0t6jcCOm_wFqPpsgrE1-A&query=" + query ;
    //const profile = this.props
    return(
      fetch(url)
      .then(response => response.json())
      .then (profiles => this.props.receiveProfiles(profiles))
      .then(responseJson => {
        this.setState({
          profiles: responseJson.results
        })
        //console.log("DidMount Profiles:", this.props.profiles)
        console.log(" URL :", url)
        console.log("---------------- ---------------- ----------------:")
      //  console.log("this is C query: ",query);
        })
      .catch(error => console.error(error))
    )
  }
    _KeyExtractor = (dataSource, index) => dataSource.email;

  render (){

   const {profiles} = this.props;
   console.log("####RENDER: Profiles: ", profiles);
  //console.log("RENDER: Objects: ", Object.values(profiles));
   console.log("--------***--- ---------------- ----------------:")
    return Object.values(profiles.results).length > 0 ? (
      <SafeAreaView>
      <FlatList
          data={Object.values(profiles.results)}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item.name}</Text>
          </View>
          )}
        />
    </SafeAreaView>

  ) :(
    <View style={styles.blank}>
        <Text style={{ fontSize: 20 }}>No Search Results.</Text>
        <Text style={{ fontSize: 20, margin: 50 }}>Add Decks Below!</Text>



      </View>
  );

}
}
// <View>
//   <Image
//   source ={{
//     uri : item.profile_image.medium
//   }}
//   />
// </View>

const mapStateToProps = profiles => ({
  profiles
});
const mapDispatchToProps = dispatch => ({
  receiveProfiles: profiles => dispatch(receiveProfiles(profiles))
});

export default connect(mapStateToProps,mapDispatchToProps) (UserList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
  },
});
