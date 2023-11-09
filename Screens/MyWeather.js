import { StyleSheet, Text, View } from 'react-native';
import Location from '../Components/MyLocation';



export default function MyWeather() {
  return (
    <View style={styles.backgroud}>
    <View style={styles.container}>
      <Text style={styles.heading}>Weather</Text>
      <Location/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:10,
    marginTop:120,
    marginLeft:8,
    marginRight:8,
    borderWidth: 5,
    borderColor: '#869691'

  },
  heading: {
    fontSize:24,
    marginBottom:16,
    color:'black',
  },
  backgroud:{
    flex:1,
    backgroundColor: '#DCE1D6'
  }
});