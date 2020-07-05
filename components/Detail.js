import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator ,  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card } from 'native-base';
import Unsplash from 'unsplash-js';
import {connect} from 'react-redux';


class Detail extends Component {

  back (){
    this.props.navigation.navigate('User List')
  }

  state = {
    allPhotos: [],
  }

  render ()  {

    const {name ,id, profile_image, photos} = this.props.route.params;
    const photoExists = photos.length;
    

 const allPhotos = [
      {id: 1,
        photo: photos[0].urls.full,
      },{id: 2,
        photo: photos[1].urls.full,
      },{id: 3,
        photo: photos[2].urls.full,
      },
      ]

console.log("allPhotos. length", allPhotos.length);


      return  allPhotos.length > 0 && photoExists > 0 ? (
        <View>
            <Button
              title={'Users'}
              style={styles.inputButton}
              onPress={() => this.back()}
            ><Text style={styles.signUpText}>Users</Text></Button>


          <View style={styles.containers}>
                  <FlatList
                  data={allPhotos}
                  renderItem={({ item }) => (

                    <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("FullScreen", {
                        photo : item.photo
                      })
                    }>
                    <Image
                      style={styles.image}
                      source={{ uri: item.photo}}/>
                        </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />

            </View>
        </View>

      ) : (
        <View><Text> no image </Text></View>
      )
  }
  }
export default Detail;
  // const mapStateToProps = (state, { route }) => ({
  //   profile: state[route.params.id]
  //
  // });
//export default connect(mapStateToProps) (Detail);

const styles = StyleSheet.create({
  containers: {
    alignItems: 'center',
    height: 700,
    backgroundColor: "#000"
  },
  searchBox: {
    marginLeft: 25,
    marginRight: 50,
  },


  image: {
    width: 300,
    height: 300,
    borderRadius: 40,
    marginRight: 20,
    borderColor: "white",
    borderWidth: 1.5,
    marginTop: 10,
  },

  inputButton: {
    backgroundColor:"#000",
    width:500,
    marginLeft: -10,
    padding: 30,

  },

  signUpText:{
    color: 'white',
    fontSize: 20,
  },
});
