import React, { useState, useEffect } from 'react';
import { MapView } from './components/MapView/MapView';
import { getStores } from './components/FreebStore';
import { Loading } from './components/Loading';
import { Error } from './components/Error';

export default function App() {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const init = async () => {
    setIsLoading(true);
    setError(null);
    getStores()
    .then(newStores => setStores(newStores))
    .catch(error => setError(error))
    .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    (() => init())();
  }, []);
  
  if(isLoading) return <Loading />;
  else if(error) return <Error error={error} refresh={init}/>;
  else return <MapView stores={stores} />;
}
