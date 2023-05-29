import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const ContactsScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <Text style={styles.title}>Контакты</Text>
      <View style={styles.cont}>
          <Text style={styles.titleitem}>DIRECCIÓN</Text>
          <Text style={styles.item}>
            Av. del Dr. Peset Aleixandre, 75, 46009 València, Valencia, Spain
          </Text>

          <Text style={styles.titleitem}>Teléfono</Text>
          <Text style={styles.item}>+34 961 13 30 39</Text>

          <Text style={styles.titleitem}>Horas Laborales</Text>
          <Text style={styles.item}>08:00 - 04:00</Text>
        </View>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: "black",
    alignSelf: "center",
    margin: 15,
  },
  cont: {
    borderWidth: 1,
    borderColor: '#909090',
    width: 350,
    height: 340,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
  titleitem: {
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 5,
    color: '#909090',
  },
  item: {
    fontSize: 20,
    fontWeight: 800,
    marginBottom: 15,
  },
  logo: {
    width: 423 / 4, 
    height: 153 / 4, 
    alignSelf: "center", 
    marginTop: 200,
  },

});

export default observer(ContactsScreen);
