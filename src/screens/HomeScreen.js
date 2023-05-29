import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/HeaderComponent';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <TouchableOpacity onPress={() => navigation.push('Shop')}>
        <Text style={styles.list}>Магазин</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Booking')}>
        <Text style={styles.list}>Бронь столика</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Matches')}>
        <Text style={styles.list}>Трансляции</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Contacts')}>
        <Text style={styles.list}>Контакты</Text>
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {width: 423 / 4, height: 153 / 4, alignSelf: "center", marginTop: 300,},
  list: {
    fontSize: 20,
    alignSelf: "center",
    fontWeight: 500,
    backgroundColor: "#006600",
    width: 300,
    height: 45,
    paddingLeft: 80,
    color: "white",
    marginTop: 30,
    alignItems: "center",
    paddingTop: 5,


  }


});

export default HomeScreen;
