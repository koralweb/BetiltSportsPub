import React, {useEffect, useState} from 'react';
import {
  Image,
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
    <>
      <Header navigation={navigation} />

      <ScrollView style={{paddingBottom: 20}}>
        <Text style={styles.title}>Корзина</Text>
        {empty ? (
          <>
            <Text style={styles.text}>
              Ваша корзина пустая - перейти в меню?
            </Text>
            <TouchableOpacity onPress={() => navigation.push('Shop')}>
              <Text style={styles.menu}>Меню</Text>
            </TouchableOpacity>
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
          </>
        ) : (
          <>
            <View style={styles.cont}>
              {renderProducts()}
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.push('Booking', {fromCart: true})}>
                <Text style={styles.button}>Подтвердить</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    margin: 10,
    paddingBottom: 30,
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: 'black',
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 25,
    fontWeight: 500,
    alignSelf: 'center',
    margin: 15,
  },
  btn: {
    fontSize: 25,
    fontWeight: 900,
    color: 'white',
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: '#006600',
    paddingLeft: 70,
    paddingRight: 70,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    marginVertical: 30,
  },
  logo: {
    width: 423 / 4,
    height: 153 / 4,
    alignSelf: 'center',
    marginTop: 350,
  },
  menu: {
    paddingLeft: 55,
    paddingTop: 5,
    borderRadius: 5,
    width: 170,
    marginTop: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 40,
    backgroundColor: '#006600',
    color: 'white',
    fontSize: 20,
    fontWeight: 600,
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
    alignSelf: 'center',
  },
});

export default observer(CartScreen);
