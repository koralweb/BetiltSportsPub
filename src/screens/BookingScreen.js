import React from 'react';
import {Text, View, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const BookingScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <Text style={style.title}>Бронирование</Text>

      <View style={style.input}>
        <TextInput placeholder="Имя"/>
         <TouchableOpacity style={style.btn}>
          <Text style={style.btntext}>Имя</Text>
         </TouchableOpacity>
      </View>

      <View style={style.input}>
        <TextInput placeholder="+000 000"/>
         <TouchableOpacity style={style.btn}>
          <Text style={style.btntext}>Номер телефона</Text>
         </TouchableOpacity>
      </View>

      <View style={style.input}>
        <TextInput placeholder="Электронная почта"/>
         <TouchableOpacity style={style.btn}>
          <Text style={style.btntext}>Почта</Text>
         </TouchableOpacity>
      </View>

      <View style={style.input}>
        <TextInput placeholder="Дата и время"/>
         <TouchableOpacity style={style.btn}>
          <Text style={style.btntext}>Дата и время</Text>
         </TouchableOpacity>
      </View>
      

         <TouchableOpacity
          style={style.checkout}
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
    flexDirection: 'row',
    justifyContent: "space-between",
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
   marginTop: 5,
  },
  btntext: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
    width: 100, 
    height: 25, 
    alignSelf: 'center',
    marginTop: 2,
    color: "black",
    textAlign: 'center',
  },


});

export default observer(BookingScreen);
