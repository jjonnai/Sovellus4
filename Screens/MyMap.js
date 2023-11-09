import React, { useEffect, useState } from 'react';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { StyleSheet, View} from 'react-native';



export default function MyMap() {

  const [marker, setMarker] = useState(null)

  const [location, setlocation] = useState({

    latitude: 65.0000,
    longitude: 25.4000,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
})

useEffect(() => {
const getUserLocation = async () => {
  let {status} = await Location.requestForegroundPermissionsAsync()

  try {
    if (status !== 'granted') {
      console.log('Location failed')
      return
    }
    const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
    setlocation({...location, "latitude": position.coords.latitude, "longitude": position.coords.longitude})
    setMarker(position.coords)
    console.log(position)
  } catch (error) {
    console.log(error)
  }
}
getUserLocation()
},[])

  return (
    <View style={styles.container}>
      <MapView
      style={styles.map}
      region={location}
      zoomControlEnabled={true}
      >
      {
        marker &&
        <Marker 
        coordinate={{latitude:marker.latitude, longitude:marker.longitude}}/>
      }
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});