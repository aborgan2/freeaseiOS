import * as React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Callout } from 'react-native-maps';

export const FreebCallout = ({
    freeb, imageUrl, name
}) => (
    <Callout tooltip style={styles.callout}>
        { imageUrl ? <Image source={{ uri: imageUrl }} style={styles.imageUrl}/> : null }
        <View style={styles.calloutTextContent}>
          <Text style={styles.text}>{freeb || ''}</Text>
          <Text style={styles.subText}>{name ? `Free at ${name}` : null}</Text>
        </View>
    </Callout>
);

const styles = StyleSheet.create({
  callout: {
    width: 150,
    height: undefined,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  imageUrl: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  text: {
    fontFamily: 'Helvetica',
    fontSize: 18,
    color: '#141823',
    fontWeight: '700',
    textAlign: 'center',
  },
  subText: {
    fontFamily: 'Helvetica',
    fontSize: 14,
    fontStyle: 'italic',
    color: '#141823',
    textAlign: 'center',
  },
  calloutTextContent: {
    padding: 4,
  }
});