import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containers: {
    backgroundColor: "#000",
    height: 700,


  },
  searchBox: {
    marginLeft: 30,
    marginRight: 40,
    borderRadius: 15,

  },
  inputButton: {
    marginTop: 20,
    marginLeft: 30,
    width: 305,
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
  tinyLogo: {
    width: 200,
    height: 200,
    marginLeft: 60,
    resizeMode: 'contain'
  },
});
