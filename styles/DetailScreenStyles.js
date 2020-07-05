import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
    marginLeft: 10,
  },
});
