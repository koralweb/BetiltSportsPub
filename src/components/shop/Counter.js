import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Counter = ({count, setCount}) => {
  const changeCount = bool => {
    if (!bool && count === 1) {
      return;
    }
    bool ? setCount(count + 1) : setCount(count - 1);
  };

  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={() => changeCount(false)}>
        <Text style={styles.cnt}>-</Text>
      </TouchableOpacity>
      <Text style={{color: '#fff', fontSize: 18}}>{count}</Text>
      <TouchableOpacity onPress={() => changeCount(true)}>
        <Text style={styles.cnt}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
    backgroundColor: '#FF0000',
    alignItems: 'center',
  },
  cnt: {
    fontSize: 20,
    fontWeight: 600,
    paddingHorizontal: 10,
    color: 'white',
  },
});

export default Counter;
