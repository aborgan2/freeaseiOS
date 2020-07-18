import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import { FreebMarker } from './components/FreebMarker';
// import firestore from '@react-native-firebase/firestore';

export default function App() {

  const testData = [
    {
      title: "Cornerstone",
      latitude: 43.544670,
      longitude: -80.247584,
      type: "0",
    },
    {
      title: "Sweet! Ice Cream, Candy & Chocolate",
      latitude: 43.543836,
      longitude: -80.249014,
      type: "1",
    },
    {
      title: "Food Example Store",
      latitude: 43.541999,
      longitude: -80.250123,
      type: "2",
    },
    {
      title: "Generic Example Store",
      latitude: 43.545012,
      longitude: -80.243000,
    }
  ];

  // printStore = async () => {
  //   const stores = await firestore().collection('storesTest').doc().get();
  //   console.log(stores);
  // }
  // printStore();
  
  return (
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
      { testData.map(data => <FreebMarker {...data} key={data.title}/>)}
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
