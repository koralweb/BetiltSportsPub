import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';
import ProductsList from '../mobx/productsList';
import Product from '../components/shop/Product';

const ShopScreen = ({navigation}) => {
  const [type, setType] = useState('All');
  const typeList = () => {
    const arr = ['All'];
    ProductsList.list.forEach(pr => {
      if (!arr.includes(pr.type)) {
        arr.push(pr.type);
      }
    });
    return arr.map(el => (
      <TouchableOpacity key={el} onPress={() => setType(el)}>
        <Text style={styles.text}>{el}</Text>
      </TouchableOpacity>
    ));
  };
  const renderProducts = () => {
    return ProductsList.list
      .filter(p => {
        if (type === 'All') {
          return true;
        }
        return p.type === type;
      })
      .map(prod => <Product prod={prod} key={Math.random()} />);
  };

  return (
    <View>
      <Header navigation={navigation} />

      <View style={styles.list}>{typeList()}</View>
      <ScrollView>
        <View style={styles.productsCont}>{renderProducts()}</View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    width: '100%',
    marginTop: 10,
  },
  text: {
    color: 'red',
    fontSize: 17,
    fontWeight: 500,
  },
  productsCont: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});
export default observer(ShopScreen);
