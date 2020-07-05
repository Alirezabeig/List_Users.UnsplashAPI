//Detail.js (Shows all the photos of a selected user )
import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, ActivityIndicator ,  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card } from 'native-base';
import Unsplash from 'unsplash-js';
import {connect} from 'react-redux';
import { styles } from '../styles/DetailScreenStyles'


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
