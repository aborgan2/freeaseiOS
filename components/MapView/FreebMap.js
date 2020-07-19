import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import { FreebMarker } from './FreebMarker';

export const FreebMap = ({ stores }) => (
  <MapView
    provider={PROVIDER_DEFAULT}
    style={styles.map}
    initialRegion={{
      latitude: 43.544670,
      longitude: -80.247584,
      latitudeDelta: 0.0222,
      longitudeDelta: 0.0221,
    }}
  >
    {stores.map((data, index) => <FreebMarker {...data} key={index}/> )}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  }
});
