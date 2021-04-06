/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {RemoveSpawn} from 'rn-spawn-component';

export const MyComponent = props => {
  const spawnNum = props.spawnNumber;
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        margin: 10,
        height: 80,
      }}>
      <View style={{alignItems: 'center'}}>
        <Text>spawnNumber: {spawnNum}</Text>
        <RemoveSpawn spawn={spawnNum} label={'Kill Me'} />
      </View>
    </View>
  );
};
