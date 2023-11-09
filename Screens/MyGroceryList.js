import react, { useState, useEffect } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, FlatList, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Foundation } from '@expo/vector-icons'; 

const STORAGE_KEY = 'product'

export default function MyGroceryList() {


  const [newProduct, setNewProduct] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function initializeProducts() {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedData) {
          setProducts(JSON.parse(storedData));
        }
      } catch (e) {
        console.log(e);
      }
    }

    initializeProducts();
  }, []);

  const addProduct = () => {
    const newKey = String(products.length);
    const object = { key: newKey, description: newProduct };
    const newProducts = [...products, object];
    setProducts(newProducts); 
    storeData(newProducts); 
    setNewProduct(''); 
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (e) {
      console.log(e);
    }
  }

  const removeItem = (itemKey) => {
    setProducts(products.filter((product) => product.key !== itemKey));
    storeData(products);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter new product'
        value={newProduct}
        onChangeText={text => setNewProduct(text)}
        onSubmitEditing={() => addProduct()}
      ></TextInput>
      <FlatList
        style={styles.list}
        data={products}
        extraData={products}
        renderItem={({ item }) => (
          <View style={styles.listContainer}>
            <Text style={styles.list}>{item.description}</Text>
            <Foundation
              style={styles.navButton}
              name="trash"
              size={29}
              color="black"
              onPress={() => removeItem(item.key)}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE1D6',
  },
  input: {
    backgroundColor: "#669999",
    borderColor: 'black',
    borderWidth:1,
    height: 40,
    margin: 8,
    fontSize:24
  },
  list: {
    margin: 8,
    fontSize:20
  },
  listContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    paddingVertical: 10,
  },
  navButton:{
    width: 50, 
    alignItems: 'flex-end',
  }
});
