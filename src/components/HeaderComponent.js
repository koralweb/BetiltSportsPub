import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {observer} from 'mobx-react-lite';
import MenuComponent from './MenuComponent';
import PopupMenu from '../mobx/popupMenu';

function HeaderComponent({navigation}) {
  return (
    <View style={styles.cont}>
      <View style={styles.btns}>
        <TouchableOpacity style={styles.btn} onPress={() => PopupMenu.change()}>
          <FontAwesomeIcon icon={PopupMenu.show ? 'close' : 'bars'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.push('Cart')}>
          <FontAwesomeIcon icon={'shopping-basket'} />
        </TouchableOpacity>
      </View>
      {!PopupMenu.show && (
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      )}
      {PopupMenu.show && <MenuComponent navigation={navigation} />}
    </View>
  );
}

const styles = StyleSheet.create({
  cont: {
    height: 80,
    marginTop: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    position: 'relative',
    zIndex: 1,
    backgroundColor: '#fff',
  },
  btns: {
    flexDirection: 'row',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 423 / 4,
    height: 153 / 4,
  },
});
export default observer(HeaderComponent);
