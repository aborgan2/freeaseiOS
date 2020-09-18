import React, { useState, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { MapView } from './components/MapView/MapView';
import { getStores } from './components/FreebStore';
import { Error } from './components/Error';

export default function App() {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState(null);

  const init = () => {
    setError(null);
    getStores()
    .then(newStores => setStores(newStores))
    .catch(error => setError(error))
  }

  useEffect(() => {
    init();
    SplashScreen.hide();
  }, []);

  if(error) return <Error error={error} refresh={init} />;
  else return stores.length ? <MapView stores={stores} /> : null;
}
