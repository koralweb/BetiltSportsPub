import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/HeaderComponent';

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <TouchableOpacity onPress={() => navigation.push('Shop')}>
        <Text>Магазин</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Booking')}>
        <Text>Бронь столика</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Matches')}>
        <Text>Трансляции</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('Contacts')}>
        <Text>Контакты</Text>
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {width: 423 / 4, height: 153 / 4},
});

export default HomeScreen;
