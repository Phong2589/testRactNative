import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CatagoryListItem from './components/CatagoryListItem'


export default function App() {
  return (
    <View style={styles.container}>
      <CatagoryListItem/>
      <CatagoryListItem/>
      <CatagoryListItem/>
      <CatagoryListItem/>
      <CatagoryListItem/>
      <CatagoryListItem/>
      <CatagoryListItem/>
      <CatagoryListItem/>
      <CatagoryListItem/>
    </View>
  );
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
