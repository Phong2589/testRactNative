import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Alert } from 'react-native';
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

  async componentDidMount() {
    axios.get('/categories')
      .then( res => {
        console.log(res)
        this.setState({
          categories: res.data
        })
      })
      .catch(error => {
        console.error(error)
        console.log('bi loi ne')
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
                  categoryName: item.name,
                  id: item.id
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