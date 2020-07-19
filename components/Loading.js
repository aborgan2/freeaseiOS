import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import LoadingGift from '../Assets/LoadingGift.png';

export const Loading = () => (
  <View style={styles.view}>
    <Image source={LoadingGift} />
  </View>
);

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1D5E7',
  }
})