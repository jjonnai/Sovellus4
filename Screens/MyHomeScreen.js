import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { TouchableOpacity } from 'react-native';


export default function MyHomeScreen({navigation}) {

return(
<View>
  <View style={styles.iconContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('GroceryList')}
    >
      <View style={styles.iconAndText}>
        <AntDesign
          style={styles.navButton}
          name="shoppingcart"
          size={70}
          color="#669999"
        />
        <Text style={styles.icontext}>Grocery List</Text>
      </View>
    </TouchableOpacity>
  </View>
  <View style={styles.iconContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('Weather')}
    >
      <View style={styles.iconAndText}>
        <MaterialCommunityIcons
          style={styles.navButton}
          name="weather-cloudy"
          size={70}
          color="#669999"
        />
        <Text style={styles.icontext}>Weather</Text>
      </View>
    </TouchableOpacity>
  </View>
  <View style={styles.iconContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('Map')}
    >
      <View style={styles.iconAndText}>
        <Foundation
          style={styles.navButton}
          name="map"
          size={70}
          color="#669999"
        />
        <Text style={styles.icontext}>Map</Text>
      </View>
    </TouchableOpacity>
  </View>
  <View style={styles.iconContainer}>
    <TouchableOpacity
      onPress={() => navigation.navigate('Notes')}
    >
      <View style={styles.iconAndText}>
        <SimpleLineIcons
          style={styles.navButton}
          name="notebook"
          size={70}
          color="#669999"
        />
        <Text style={styles.icontext}>Notes</Text>
      </View>
    </TouchableOpacity>
  </View>
</View>
)}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    backgroundColor: '#DCE1D6'
  },
  iconContainer: {
    alignItems: 'stretch',
    justifyContent: 'space-between',
    borderColor: '#869691', 
    borderWidth: 2, 
    marginVertical: 8, 
    marginRight:16,
    marginLeft:16,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconAndText: {
    marginLeft:16,
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical:8,
  },
  navButton: {
    marginRight:24,
  },
  icontext: {
    color: 'black',
    fontSize:22,
  },

});
