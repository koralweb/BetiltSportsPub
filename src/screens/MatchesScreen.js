import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const MatchesScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <Text>MatchesScreen</Text>
    </View>
  );
};

export default observer(MatchesScreen);
