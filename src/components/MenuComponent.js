import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {observer} from 'mobx-react-lite';
import PopupMenu from '../mobx/popupMenu';

const MenuComponent = ({navigation}) => {
  const clickOnMenuItem = item => {
    PopupMenu.change();
    navigation.push(item);
  };

  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => clickOnMenuItem('Shop')}>
        <Text>Магазин</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnMenuItem('Booking')}>
        <Text>Бронь столика</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnMenuItem('Matches')}>
        <Text>Трансляции</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnMenuItem('Contacts')}>
        <Text>Контакты</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnMenuItem('Cart')}>
        <Text>Корзина</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: '101%',
    left: 0,
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    backgroundColor: '#fff',
    zIndex: 100,
  },
});

export default observer(MenuComponent);
