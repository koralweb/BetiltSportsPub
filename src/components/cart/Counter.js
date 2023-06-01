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
      <TouchableOpacity
        style={{...styles.textBlockAll, ...styles.textmBlock}}
        onPress={() => changeCnt(false)}>
        <Text style={styles.textm}>-</Text>
      </TouchableOpacity>
      <Text style={styles.amount}>{cnt}</Text>
      <TouchableOpacity
        style={{...styles.textBlockAll, ...styles.textBlock}}
        onPress={() => changeCnt(true)}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    paddingLeft: 230, // уточнить как лучше подвинуть
    alignItems: 'center',
  },
  textBlockAll: {
    borderRadius: 50,
    borderWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBlock: {
    backgroundColor: '#006600',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
  textmBlock: {
    borderColor: '#006600',
  },
  textm: {
    fontSize: 20,
    color: '#006600',
  },
  amount: {
    fontSize: 20,
    fontWeight: 700,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    color: 'black',
  },
});

export default Counter;
