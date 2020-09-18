import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { FreebMap } from './FreebMap/FreebMap';
import { MapFocusButtonRow } from './MapFocusButtonRow/MapFocusButtonRow';
import { locations } from './MapFocusButtonRow/locations';

export const MapView = ({stores}) => {
  const [region, setRegion] = useState(locations.guelph);
  const onRegionChange = region => {
    setRegion(region);
  };

  return (
  <View>
    <StatusBar />
    <FreebMap stores={stores} region={region} onRegionChange={onRegionChange} />
    <MapFocusButtonRow onRegionChange={onRegionChange} />
  </View>
)};