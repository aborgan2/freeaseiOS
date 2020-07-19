import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import { FreebCallout } from './FreebCallout';
import Coffee from '../Assets/Coffee_Marker.png';
import Candy from '../Assets/Candy_Marker.png';
import Food from '../Assets/Food_Marker.png';
import Generic from '../Assets/Generic_Marker.png';

export const FreebMarker = ({
    freeb, name, latitude, longitude, markerType, imageUrl, description
}) => (
  <Marker 
    title={name}
    coordinate={{
      latitude: latitude,
      longitude: longitude,
    }}
  >
    <Image source={selectMarker(markerType)} style={styles.marker} />
    <FreebCallout imageUrl={imageUrl} freeb={freeb} name={name}/>
  </Marker>
);

const selectMarker = type => {
  switch(type) {
    case 1:
      return Coffee;
    case 2:
      return Candy;
    case 3:
      return Food;
    default:
      return Generic;
  }
}

const styles = StyleSheet.create({
  marker: {
    aspectRatio: 361/531,
    width: 75,
    height: 75,
  },
});