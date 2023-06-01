import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/HeaderComponent';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header navigation={navigation} />
      <TouchableOpacity
        style={styles.listBlock}
        onPress={() => navigation.push('Shop')}>
        <Text style={styles.list}>Магазин</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listBlock}
        onPress={() => navigation.push('Booking')}>
        <Text style={styles.list}>Бронь столика</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listBlock}
        onPress={() => navigation.push('Matches')}>
        <Text style={styles.list}>Трансляции</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.listBlock}
        onPress={() => navigation.push('Contacts')}>
        <Text style={styles.list}>Контакты</Text>
      </TouchableOpacity>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 423 / 4,
    height: 153 / 4,
    alignSelf: 'center',
    marginTop: 'auto',
  },
  listBlock: {
    backgroundColor: '#006600',
    width: 300,
    height: 45,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
  list: {
    fontSize: 20,
    fontWeight: 500,
    color: 'white',
  },
});

export default HomeScreen;
