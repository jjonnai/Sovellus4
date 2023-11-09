import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyHomeScreen from './Screens/MyHomeScreen';
import MyGroceryList from './Screens/MyGroceryList'
import MyMap from './Screens/MyMap'
import MyWeather from './Screens/MyWeather'
import MyNotes from './Screens/MyNotes';




export default function App(){
  const Stack = createNativeStackNavigator()

  return(
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
      name="Home"
      component={MyHomeScreen}
      options={{
        title:"Home",
        headerTitle: "Home"
      }}
/>
      <Stack.Screen
      name="GroceryList"
      component={MyGroceryList}
      option={{
        title: 'GroceryList',
        headerTitle: 'GroceryList'
      }}

      />
      <Stack.Screen
      name="Map"
      component={MyMap}
      option={{
        title:'Map',
        headerTitle:'Map'
      }}
      />
      <Stack.Screen
      name="Weather"
      component={MyWeather}
      />
      <Stack.Screen
      name="Notes"
      component={MyNotes}
      />

      
    </Stack.Navigator>
   </NavigationContainer>
  )
}

