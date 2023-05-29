import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = ({prod}) => {
  const [cnt, setCnt] = useState(prod.count);

  const changeCnt = bool => {
    if (!bool && cnt === 1) {
      return;
    }
    bool ? setCnt(cnt + 1) : setCnt(cnt - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => changeCnt(false)}>
        <Text style={styles.textm}>-</Text>
      </TouchableOpacity>
      <Text style={styles.amount}>{cnt}</Text>
      <TouchableOpacity onPress={() => changeCnt(true)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    paddingLeft: 230, // уточнить как лучше подвинуть
    
    
  },
  text: {
    fontSize: 20,
    borderRadius: 50,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    backgroundColor: "#006600",
    color: "white",

  },
  textm: {
    fontSize: 20,
    borderRadius: 50,
    borderWidth: 1,
    paddingLeft: 13,
    paddingRight: 13,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    borderColor: "#006600",
    color: "#006600",

  },
  amount: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    color: "black",
  },

});

export default Counter;
