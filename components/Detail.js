import { StatusBar } from 'expo-status-bar';
import React , { Component, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, ActivityIndicator ,  } from 'react-native';
import {TextInput} from 'react-native-paper';
import { Button, Card, Image } from 'native-base';
import Unsplash from 'unsplash-js';
import {connect} from 'react-redux';


class Detail extends Component {


  render ()  {
    console.log("&&&&& $$$ props => ",this.props);
    const name = this.props.route.params.name;
      return (
        <View style={styles.containers}>
        <Text>{name}</Text>
        </View>
      );
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
    marginTop: 30,
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
});
