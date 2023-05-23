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
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{cnt}</Text>
      <TouchableOpacity onPress={() => changeCnt(true)}>
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
