import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const BookingScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <Text>Booking</Text>
    </View>
  );
};

export default observer(BookingScreen);
