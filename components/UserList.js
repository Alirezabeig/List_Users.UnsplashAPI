//UserList.js (Pulls the list of users based on the keywords)
import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, Alert,TouchableOpacity, FlatList, Image, ActivityIndicator , SafeAreaView  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card, CardItem } from 'native-base';
import Unsplash from 'unsplash-js';
import fetch from 'node-fetch';
import Search from './Search';
import {receiveProfiles} from '../actions/index';
import {connect} from 'react-redux';
import {styles} from '../styles/UserListStyles'


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
    return Object.values(profiles)[0] > 0 ? (

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
              onPress={() => {
                if (item.photos.length > 0){
                  this.props.navigation.navigate("Detail", {
                  id : item.id,
                  name :item.name,
                  profile_image: item.profile_image,
                  photos : item.photos
                })
              } else {
                Alert.alert('no photos to view');
              }

            }}>
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
    <View style={styles.container}>
    <Button
      title={'Search'}
      style={styles.inputButton}
      onPress={() => this.back()}
    ><Text style={styles.signUpText}> Back to Search</Text>
    <Text style={styles.noResult}>Ooops, no search results.</Text>
    </Button>


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
