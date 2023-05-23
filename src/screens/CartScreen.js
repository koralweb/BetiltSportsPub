import React, {useEffect, useState} from 'react';
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
import Product from '../components/cart/Product';

const CartScreen = ({navigation}) => {
  const [empty, setEmpty] = useState(true);
  const [updateState, setUpdateState] = useState(1);

  useEffect(() => {
    const em = ProductsList.list.some(el => el.added);
    setEmpty(!em);
  }, [updateState]);

  const renderProducts = () => {
    return ProductsList.list
      .filter(pr => pr.added)
      .map(prod => (
        <Product prod={prod} key={prod.name} setUpdateState={setUpdateState} />
      ));
  };

  return (
    <View>
      <Header navigation={navigation} />

      <ScrollView>
        <Text>Корзина</Text>
        {empty ? (
          <>
            <Text>Ваша корзина пустая - перейти в меню?</Text>
            <TouchableOpacity onPress={() => navigation.push('Shop')}>
              <Text>Меню</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <View style={styles.cont}>{renderProducts()}</View>
            <TouchableOpacity>
              <Text>Подтвердить</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {},
});

export default observer(CartScreen);
