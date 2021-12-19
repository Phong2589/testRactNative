import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CatagoryListItem from './components/CatagoryListItem'


export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      categories: [
        {id: 1, name: "ly thuy tinh"},
        {id: 2, name: "gau bong"},
        {id: 3, name: "do choi lap rap"},
      ]
    };
  }

  render() {
    const {categories} = this.state;
    return (
        // <ScrollView style={{paddingLeft: 16, paddingRight:16}}>
          // { {categories.map(category => (
          //   <CatagoryListItem key={category.id} category={category} />
          // ))} }
          // </ScrollView>

        <FlatList
          data={categories} 
          renderItem={({item}) => <CatagoryListItem category={item} />}
          keyExtractor={ (item) => `${item.id}` }
          contentContainerStyle = {{paddingLeft: 16, paddingRight:16, paddingTop: 50}}
        />
        
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