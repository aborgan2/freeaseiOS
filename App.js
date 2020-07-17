import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT, Marker } from 'react-native-maps';

export default function App() {
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      style={styles.map}
      initialRegion={{
        latitude: 43.544670,
        longitude: -80.247584,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Marker 
        title={"Cornerstone"}
        coordinate={{
          latitude: 43.544670,
          longitude: -80.247584,
        }}
      />
    </MapView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '100%',
    width: '100%',
  }
});