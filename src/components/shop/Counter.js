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
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => changeCount(true)}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flexDirection: 'row',
  },
});

export default Counter;
