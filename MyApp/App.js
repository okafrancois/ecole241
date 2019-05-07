import React from 'react';
import {View, Button, TextInput, StyleSheet, FlatList, Text} from 'react-native'
import Search from './components/Search'
export default class App extends React.Component{
  render(){
    return (
    <Search />
    );
  }
}
const style = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    backgroundColor: '#ec3c05',
    padding: 10,
    borderRadius: 20,
  }
})
