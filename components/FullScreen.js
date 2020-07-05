//FullScreen.js ( Presents a specific photo in full-screen )
import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity, FlatList, Image, ActivityIndicator ,  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card } from 'native-base';
import Unsplash from 'unsplash-js';
import {connect} from 'react-redux';
import {styles} from '../styles/FullScreenStyles'

class FullScreen extends Component {
  back (){
    this.props.navigation.navigate('Detail')
  }
  render ()  {
    const photo = this.props.route.params.photo

      return (
        <View>
        <TouchableOpacity
         onPress={()=>this.back()}>
        <View style={styles.containers}>

            <Image
            style={styles.image}
            source={{ uri: photo}}/>

        </View>
        </TouchableOpacity>
        </View>

      );
  }
  }
export default FullScreen;
