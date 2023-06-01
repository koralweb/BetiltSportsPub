import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const ThankYouScreen = ({navigation, route}) => {
  const [fromCart, setFromCart] = useState(false);

  useEffect(() => {
    if (route.params) {
      setFromCart(route.params.fromCart);
    }
  }, []);

  return (
    <View>
      <Header navigation={navigation} />

      <Text style={style.title}>Спасибо за ваш заказ!</Text>
      <Text style={{textAlign: 'center'}}>
        Наши менеджеры свяжутся с вами в ближайшее время
      </Text>

      <TouchableOpacity
        style={style.checkout}
        onPress={() => navigation.push('Home')}>
        <Text style={style.button}>На главную</Text>
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={style.logo} />
    </View>
  );
};

const style = StyleSheet.create({
  cont: {},
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: 'black',
    alignSelf: 'center',
    margin: 20,
  },
  input: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: '96%',
    height: 40,
    marginBottom: 10,
    marginHorizontal: '2%',
    borderColor: '#006600',
    color: '#909090',
    fontSize: 15,
    paddingLeft: 15,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    marginRight: 5,
  },
  logo: {
    width: 423 / 4,
    height: 153 / 4,
    alignSelf: 'center',
    marginTop: 150,
  },
  checkout: {
    paddingTop: 5,
    borderWidth: 1,
    width: 300,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 40,
    backgroundColor: '#006600',
    color: 'white',
  },
  button: {
    color: 'white',
    fontSize: 20,
    fontWeight: 700,
    alignSelf: 'center',
  },
  btn: {
    marginRight: 5,
    marginVertical: 5,
  },
  btntext: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    width: 100,
    height: 25,
    alignSelf: 'center',
    marginTop: 2,
    color: 'black',
    textAlign: 'center',
  },
});

export default observer(ThankYouScreen);
