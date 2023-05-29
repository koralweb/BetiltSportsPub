import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const BookingScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <Text style={style.title}>Бронирование</Text>
      <TextInput
          style={style.input}
          placeholder="Имя"
        />
        <TextInput
          style={style.input}
          placeholder="+000 000"
        />
        <TextInput
          style={style.input}
          placeholder="Электронная почта"
        />
        <TextInput
          style={style.input}
          placeholder="Дата и время"
        />
         <TouchableOpacity
          style={style.btn}
          onPress={() => navigation.push('Checkout')}>
          <Text style={style.button}>Забронировать</Text>
        </TouchableOpacity>
        <Image source={require('../assets/Logo.png')} style={style.logo} />
       

    </View>
  );
};

const style= StyleSheet.create({
  cont: {

  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: "black",
    alignSelf: "center",
    margin: 20,
  },
  input: {
    borderWidth: 1,
    width: 350,
    height: 40,
    marginBottom: 10,
    marginLeft: 20,
    borderColor: '#006600',
    color: '#909090',
    fontSize: 15,
    paddingLeft: 15,
    marginTop: 5,

  },
  logo: {
    width: 423 / 4, 
    height: 153 / 4, 
    alignSelf: "center", 
    marginTop: 150,

  },
  btn: {
    padding: 5,
    borderWidth: 1,
    width: 200,
    marginTop: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 350,
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


});

export default observer(BookingScreen);
