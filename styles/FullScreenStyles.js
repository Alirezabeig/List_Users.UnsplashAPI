import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
