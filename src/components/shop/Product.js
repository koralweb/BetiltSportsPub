import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Counter from './Counter';
import ProductsList from '../../mobx/productsList';

const Product = ({prod}) => {
  const [count, setCount] = useState(prod.count);
  return (
    <View style={styles.prodItem}>
      <Image source={prod.img} style={styles.prodImg} />
      <View style={styles.nameCost}>
        <Text>{prod.name}</Text>
        <Text>€ {prod.cost}</Text>
      </View>
      <View style={styles.counterBtn}>
        {!prod.added && <Counter count={count} setCount={setCount} />}
        {prod.added ? (
          <TouchableOpacity>
            <Text>Added</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => ProductsList.addProduct(prod.id, count)}>
            <Text>Add</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  prodItem: {
    borderWidth: 1,
    width: '46%',
    marginBottom: 10,
  },
  prodImg: {
    width: 100,
    height: 100,
  },
  nameCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  counterBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default observer(Product);
