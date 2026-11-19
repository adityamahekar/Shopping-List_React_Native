import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function AllItems({ data }) {

  const flatListRef = useRef(null);

  return (
    <View style={{ flex: 1 }}>

      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.itemText}>Quantity:</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.itemContainer,
              {
                backgroundColor:
                  item.stock === 0 ? '#f16d78' : '#cdf3d7'
              }
            ]}
          >
            <Text style={styles.headingText}>
              Items: {item.name}
            </Text>

            <Text style={styles.itemText}>
              Quantity: {item.stock} {item.unit}
            </Text>
          </View>
        )}

      // onContentSizeChange={() => {
      //   flatListRef.current?.scrollToEnd({ animated: true });
      // }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#d88181',
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 14,
  },
});