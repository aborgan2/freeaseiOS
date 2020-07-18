import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';
import { FreebMarker } from './components/FreebMarker';
import firestore from '@react-native-firebase/firestore';

export default function App() {
  const [stores, updateStores] = useState([]);

  useEffect(() => {
    getStores();
  }, []);

  const getStores = async () => {
    const snapshot = await firestore().collection('storesTest').get();
    updateStores(snapshot.docs.map(doc => {
      return {
        latitude: Number(doc.data().Latitude),
        longitude: Number(doc.data().Longitude),
        markerType: Number(doc.data().Icon),
        imageUrl: doc.data().ImageUrl,
        description: doc.data().Description,
        name: doc.data().Name,
        address: doc.data().Address,
        freeb: doc.data().Freeb,
      };
    }));
  }
  
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
      { stores.length === 0 ? null : stores.map((data, index) => {
        console.log(data);
        return <FreebMarker {...data} key={index}/>
      })}
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
