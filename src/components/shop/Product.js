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
        <Text style={styles.title}>{prod.name}</Text>
        <Text style={styles.price}>€ {prod.cost}</Text>
      </View>
      <View style={styles.counterBtn}>
        {!prod.added && <Counter count={count} setCount={setCount} />}
        {prod.added ? (
          <TouchableOpacity>
            <Text style={styles.btns}>Added</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => ProductsList.addProduct(prod.id, count)}>
            <Text style={styles.btn}>Add</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  prodItem: {
    borderWidth: 0.5,
    borderColor: 'grey',
    borderRadius: 5,
    width: '46%',
    marginBottom: 10,
    marginTop: 10,
  },
  prodImg: {
    width: 100,
    height: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: 500,
    color: 'black',
    paddingLeft: 5,
    paddingTop: 5,
  },
  price: {
    fontSize: 15,
    fontWeight: 500,
    color: '#006600',
    paddingRight: 5,
    paddingTop: 5,
  },
  nameCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  counterBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  btn: {
    backgroundColor: '#006600',
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
  btns: {
    backgroundColor: '#06D906',
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default observer(Product);
