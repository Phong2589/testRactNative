
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import ProductListItem from '../components/ProductListItem';


export default class Category extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          images: [
            {
              url: 'https://res.cloudinary.com/pqshop/image/upload/v1639988213/echkidieu_i6imiw.jpg'
            }
          ],
          name: 'gau bong',
          price: '100000'
        },
        {
          id: 2,
          images: [
            {
              url: 'https://res.cloudinary.com/pqshop/image/upload/v1639988213/echkidieu_i6imiw.jpg'
            }
          ],
          name: 'gau bong so 2',
          price: '300000'
        },
      ]
    };
  }

  render() {
    return (
      <FlatList
      data={this.state.products} 
      numColumns={2}
      renderItem={({item}) => 
      <View style={styles.wrapper}>
        <ProductListItem product = {item}  />
      </View>
      }
      keyExtractor={ (item) => `${item.id}` }
      contentContainerStyle = {styles.container}
    />
    );
  }
  }


  const styles = StyleSheet.create({
    container: {
      paddingTop: 8,
    },
    wrapper: {
      flex: 1,
      paddingHorizontal: 8,
    }
  });