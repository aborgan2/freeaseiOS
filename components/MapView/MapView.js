import React from 'react';
import { View, StatusBar } from 'react-native';
import { FreebMap } from './FreebMap';

export const MapView = ({stores}) => (
  <View>
    <StatusBar />
    <FreebMap stores={stores} />
  </View>
);