import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {observer} from 'mobx-react-lite';
import Header from '../components/HeaderComponent';

const MatchesScreen = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />

      <Text style={styles.title}>Спортивные трансляции</Text>
      <View style={styles.item}>
        <Text style={styles.data}>25.06 </Text>
        <Text style={styles.data}>26.06</Text>
        <Text style={styles.data}>27.06</Text>
        <Text style={styles.data}>28.06</Text>
        <Text style={styles.data}>29.06</Text>
      </View>

      <View style={styles.list}>
      <View >
        <Text style={styles.ligaTitle}>Liga</Text>
      
         <View style={styles.cart}>
            <View style={styles.teams}>
              <Text style={styles.teamsname_1}>team_1</Text>
              <Text style={styles.teamsname_2}>team_2</Text>
            </View>
            <View style={styles.dateTime}>
              <Text style={styles.date}>.05 - </Text>
              <Text style={styles.time}></Text>
            </View> 
         </View>
      </View>

       <View>
         <Text style={styles.ligaTitle}>Liga</Text>
         <View style={styles.cart}>
            <View style={styles.teams}>
              <Text style={styles.teamsname_1}>team_1</Text>
              <Text style={styles.teamsname_2}>team_2</Text>
            </View>
            <View style={styles.dateTime}>
              <Text style={styles.date}>.05 - </Text>
              <Text style={styles.time}></Text>
            </View> 
         </View>
       </View>
     </View>   
     <Image source={require('../assets/Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 30,
    fontWeight: 700,
    color: "black",
    alignSelf: "center",
    margin: 15,
  },
  item: {
    flexDirection: "row",
    alignSelf: "center",
  },
  data: {
    marginHorizontal: 3,
    borderRadius: 5,
    padding: 15,
    marginBottom: 30,
    backgroundColor: "#A5D0A5",
    color: "black",
    fontSize: 15,
  },
  ligaTitle: {
    fontSize: 25,
    fontWeight: 500,
    color: "#006600",
    marginBottom: 5,
    marginLeft: 15,
    alignSelf: "center",
  },
  cart: {
    borderWidth: 0.5,
    alignSelf: "center",
    width: 170,
    height: 110,
    borderRadius: 5,
  },
  teams: {
 
   
  },
  teamsname_1: {
    color: "white",
    backgroundColor: "#A5D0A5",
    fontSize: 20,
    fontWeight: 400,
  },
  teamsname_2: {
    color: "white",
    backgroundColor: "#94B894",
    fontSize: 20,
    fontWeight: 400,
  },
  date: {
    color: "grey",
    fontSize: 25,
    fontWeight: 400,
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  time: {
    color: "red",
    fontSize: 25,
    fontWeight: 400,
    paddingLeft: 25,
    paddingTop: 10,
    paddingBottom: 10,
  },
  logo: {
    width: 423 / 4, 
    height: 153 / 4, 
    alignSelf: "center", 
    marginTop: 300,

  },

});

export default observer(MatchesScreen);
