import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CatagoryListItem from '../components/CatagoryListItem';
import axios from 'axios';


export default class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [
        // { id: 1, name: "ly thuy tinh" },
        // { id: 2, name: "gau bong" },
        // { id: 3, name: "do choi lap rap" }
      ]
    };
  }

  componentDidMount() {
    axios.get('http://localhost:3000/categories')
      .then(res => {
        this.setState({
          categories: res.data
        })
        console.log('phong ne')
      })
      .catch(error => {
        console.log('phong ne 123')
        console.error(error)
      })
  }

  render() {
    const { navigation } = this.props;
    const { categories } = this.state;
    return (
      // <ScrollView style={{paddingLeft: 16, paddingRight:16}}>
      // { {categories.map(category => (
      //   <CatagoryListItem key={category.id} category={category} />
      // ))} }
      // </ScrollView>

      <FlatList
        data={categories}
        renderItem={({ item }) =>
          <CatagoryListItem
            category={item}
            onPress={
              () => {
                navigation.navigate('DetailProduct', {
                  categoryName: item.name
                });
              }}
          />}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={{ paddingLeft: 16, paddingRight: 16, paddingTop: 16 }}
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