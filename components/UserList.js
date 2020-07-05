import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator , SafeAreaView  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card, CardItem } from 'native-base';
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

  static navigationOptions = ({ route, navigation}) => ({
      query: route.params.query,
    });

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

    back (){
      this.props.navigation.navigate('Search')
    }
  render (){

   const {profiles} = this.props;



    return Object.values(profiles).length > 0 ? (
      <SafeAreaView style={styles.container}>

      <Button
        title={'Search'}
        style={styles.inputButton}
        onPress={() => this.back()}
      ><Text style={styles.signUpText}>Search</Text></Button>
      <FlatList
          data={Object.values(profiles.results)}
          keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => (

            <TouchableOpacity
            style={styles.card10}
            onPress={() =>
              this.props.navigation.navigate("Detail", {
                id : item.id,
                name :item.name,
                profile_image: item.profile_image,
                photos : item.photos
              })
            }>
        <View>
          <Card style={styles.cardImages}>
            <CardItem style={styles.cardImages}>
              <Image
                style={styles.image}
                source={{ uri: item.profile_image.large}}/>

              <View style= {styles.texts}>
                <Text style={styles.text}>{item.name}</Text>
                <Text style={styles.numbPhoto}>{item.total_photos} photos</Text>
              </View>




            </CardItem>
            <View style={styles.follow}>
              <Image
              style={styles.tinyLogo}
                source={require('../assets/add.png')}
              />
            </View>
          </Card>

        </View>
          </TouchableOpacity>
          )}
        />
    </SafeAreaView>

  ) :(
    <View style={styles.blank}>
        <Text style={{ fontSize: 20 }}>No Search Results.</Text>
      </View>
  );
  }
}

const mapStateToProps = profiles => ({
  profiles
});
const mapDispatchToProps = dispatch => ({
  receiveProfiles: profiles => dispatch(receiveProfiles(profiles))
});

export default connect(mapStateToProps,mapDispatchToProps) (UserList);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    height: 700,
  },

  image: {
    width: 102,
    height: 102,
    borderRadius: 200,
    marginRight: 20,
    marginLeft: -30,
    borderColor: "white",
    borderWidth: 1.5,
  },
  cardImages: {
    borderRadius: 500,
    height: 100,
    width:300,
    marginLeft: 10,

  },
  card: {
    borderRadius: 500,
    height: 110,
    width:300,

  },
  inputButton: {
    backgroundColor:"#000",
    margin: 15,

  },

  signUpText:{
    color: 'white',
    fontSize: 20,
  },
  texts: {
    fontSize: 20,
    marginTop: 0,
    fontFamily: "Cochin",
  },
  text: {
    fontSize: 20,
    fontFamily: "Cochin"
  },
  numbPhoto: {
    fontSize: 15,
    marginTop:10,
    fontFamily: "Cochin"
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  follow: {


    alignItems: 'center',
    justifyContent: 'center',
    marginRight:-320,
    marginTop: -100,

  }

});
