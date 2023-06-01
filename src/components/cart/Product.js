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
        <View style={styles.item}>
          <Text style={styles.title}>{prod.name}</Text>
          <FontAwesomeIcon style={styles.icon} icon={'close'} />
        </View>
      </TouchableOpacity>

      <Image source={prod.img} style={styles.img} />
      <Counter prod={prod} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    borderWidth: 0.2,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  img: {
    width: 90,
    height: 90,
    marginLeft: 10,
  },
  title: {
    color: 'black',
    paddingLeft: 100,
    fontSize: 17,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 30,
    height: 30,
    paddingLeft: 30,
    paddingTop: 30,
    color: 'grey',
  },
});

export default observer(Product);
