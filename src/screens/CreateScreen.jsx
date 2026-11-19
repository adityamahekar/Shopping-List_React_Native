
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  Alert,
} from 'react-native';

import React, { useState } from 'react';

export default function CreateScreen({ data, setdata }) {
  const [itemName, setitemName] = useState('');
  const [stockAmt, setstockAmt] = useState('');
  const [isEdit, setisEdit] = useState(false);
  const [editItemId, seteditItemId] = useState(null);

  function addhandlerAddItem() {
    if (!itemName.trim() || !stockAmt.trim()) {
      Alert.alert('Error', 'Please enter item name and quantity');
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: itemName.trim(),
      stock: Number(stockAmt),
      unit: 'kg',
    };

    setdata(prev => [...prev, newItem]);

    setitemName('');
    setstockAmt('');

    setisEdit(false);
  }


  function deleteItemHandler(id) {
    setdata(data.filter((item) => item.id !== id))
  }

  function editItemHandler(item) {
    setisEdit(true);
    setitemName(item.name);
    setstockAmt(item.stock.toString()); // MISTAKE FIX: Load stock into input
    seteditItemId(item.id);
  }

  function updateItemHandler() {
    setdata(data.map((item) => 
      item.id === editItemId ? {
        ...item, name: itemName, stock: Number(stockAmt) } : item
    ));
    setitemName('');
    setstockAmt('');
    setisEdit(false);
    seteditItemId(null);
  }
  return (
    <View style={styles.container}>

      <TextInput
        placeholder="Enter an Item"
        placeholderTextColor="#ef0000"
        style={styles.input}
        value={itemName}
        onChangeText={setitemName}
      />

      <TextInput
        placeholder="Enter Stock"
        placeholderTextColor="#ef0000"
        style={styles.input}
        keyboardType="numeric"
        value={stockAmt}
        onChangeText={setstockAmt}
      />

      <Pressable
        style={styles.Addbtn}
        onPress={() => isEdit ? updateItemHandler() : addhandlerAddItem()}
      >
        <Text style={styles.textbtn}> {isEdit ? 'Edit Item' : 'Add Item'}</Text>
      </Pressable>

      <Text style={styles.title}>All Items in Stock</Text>

      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor:
                  item.stock === 0 ? '#f16d78' : '#cdf3d7',
              },
            ]}
          >
            <Text style={styles.headingText}>{item.name}</Text>

            <Text style={styles.itemText}>
              {item.stock} {item.unit}
            </Text>

            <View style={styles.actions}>
              <Pressable onPress={() => editItemHandler(item)}>
                <Text style={styles.itemText}>Edit</Text>
              </Pressable>

              <Pressable onPress={() => deleteItemHandler(item.id)}>
                <Text style={styles.itemText}>Delete</Text>
              </Pressable>

            </View>
          </View>
        )
        }
      />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  Addbtn: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 7,
    backgroundColor: 'skyblue',
    alignItems: 'center',
  },
  textbtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 30,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 7,
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemText: {
    fontSize: 14,
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
});
