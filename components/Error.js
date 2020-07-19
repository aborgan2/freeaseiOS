import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export const Error = ({ error, refresh }) => (
  <View style={styles.view}>
    <Text style={styles.errorText}>{error}</Text>
    {error === "Unable to find Freebies" ? (
      <Button
        title="refresh"
        onPress={() => refresh()}
      />  
    ) : null}
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
  },
  errorText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#141823',
    textAlign: 'center',
  },
})