import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import Counter from './Counter';
import ProductsList from '../../mobx/productsList';
import {observer} from 'mobx-react-lite';

const Product = ({prod, setUpdateState}) => {
  const removeProductFromCart = () => {
    ProductsList.removeProduct(prod.id);
    ProductsList.refreshCount(prod.id);
    setUpdateState(Math.random());
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={removeProductFromCart}>
        <FontAwesomeIcon icon={'close'} />
      </TouchableOpacity>
      <Text>{prod.name}</Text>
      <Image source={prod.img} style={styles.img} />
      <Counter prod={prod} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderWidth: 1,
    marginHorizontal: 10,
  },
  img: {
    width: 60,
    height: 60,
  },
});

export default observer(Product);
