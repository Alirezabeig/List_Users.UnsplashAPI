import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView,TouchableOpacity, FlatList, Image, ActivityIndicator ,  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card } from 'native-base';
import Unsplash from 'unsplash-js';
import {connect} from 'react-redux';


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
  // const mapStateToProps = (state, { route }) => ({
  //   profile: state[route.params.id]
  //
  // });
//export default connect(mapStateToProps) (FullScreen);

const styles = StyleSheet.create({
  containers: {
    alignItems: 'center',
    backgroundColor: "#000"
  },
  searchBox: {
    marginLeft: 25,
    marginRight: 50,
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
  image: {
    width : "100%",
    height: "100%",
    borderColor: "white",
    borderWidth: 1.5,
    resizeMode: 'contain'

  },
});
