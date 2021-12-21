import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CatagoryListItem from './components/CatagoryListItem'
import AppNavigation from './AppNavigator';
import axios from 'axios';

axios.defaults.baseURL = 'http://d00b-42-113-190-96.ngrok.io'

export default class App extends React.Component {

  render() {

    return (
        <AppNavigation />
    );
  }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'stretch',
      backgroundColor: '#fff',
      justifyContent: 'center',
      paddingLeft: 16,
      paddingRight: 16,
    },
  });