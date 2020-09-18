import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { locations } from './locations';

export const MapFocusButton = ({guelph, onPress}) => {
  const handlePress = () => {
    onPress(guelph ? locations.guelph : locations.kitchener);
  }

  return (
    <View style={styles.buttonWrapper}>
      <Button
        style={styles.button}
        title={guelph ? 'Guelph' : 'Kitchener'}
        onPress={handlePress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  button: {
    color: 'blue',
    position: "absolute",
    bottom: 20,
    left: 20,
  }
})