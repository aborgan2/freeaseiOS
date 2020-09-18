import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import { FreebMarker } from './FreebMarker';
import { locations } from '../MapFocusButtonRow/locations';

export const FreebMap = ({ stores, region }) => (
  <MapView
    provider={PROVIDER_DEFAULT}
    style={styles.map}
    initialRegion={locations.guelph}
    region={region}
  >
    {stores.map((data, index) => <FreebMarker {...data} key={index}/> )}
  </MapView>
);

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  },
});
