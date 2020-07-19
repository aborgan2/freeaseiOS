import * as React from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Callout } from 'react-native-maps';

export const FreebCallout = ({
    name, imageUrl, description
}) => (
    <Callout>
      <Image source={{ uri: imageUrl }} style={styles.imageUrl}/>
      <Text>{name}</Text>
      <Text>{description}</Text>
    </Callout>
);

const styles = StyleSheet.create({
  imageUrl: {
    width: 100,
    height: 100,
  },
});