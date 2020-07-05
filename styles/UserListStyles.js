import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
  noResult:{
    marginTop: 0,
    color: 'white',
    fontSize: 15,
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
