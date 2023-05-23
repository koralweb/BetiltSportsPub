import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const ContactsScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <Text>ContactsScreen</Text>
    </View>
  );
};

export default observer(ContactsScreen);
