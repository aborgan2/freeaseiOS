import React from 'react';
import { View, StyleSheet } from 'react-native';
import { locations } from './locations';
import { MapFocusButton } from './MapFocusButton';

export const MapFocusButtonRow = ({ onRegionChange }) => (
  <View style={styles.buttonRow}>
    {Object.keys(locations).map(name => (
      <MapFocusButton
        key={name}
        guelph={name==='guelph'}
        onPress={onRegionChange}
      />
    ))}
  </View>
);

const styles = StyleSheet.create({
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 75,
    left: 20,
    backgroundColor: 'transparent',
  },
})