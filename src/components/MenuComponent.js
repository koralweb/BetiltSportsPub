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
        <Text style={styles.text}>Comprar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnMenuItem('Booking')}>
        <Text style={styles.text}>Reserva de mesa</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnMenuItem('Matches')}>
        <Text style={styles.text}>Transmissões</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnMenuItem('Contacts')}>
        <Text style={styles.text}>Contatos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clickOnMenuItem('Cart')}>
        <Text style={styles.text}>Cesta</Text>
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
  text: {
    fontSize: 30,
    fontWeight: 600,
    paddingLeft: 25,
    paddingTop: 25,
    color: 'black',
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
});

export default observer(MenuComponent);
