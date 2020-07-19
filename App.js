import React, { useState, useEffect } from 'react';
import { FreebMap } from './components/FreebMap';
import { getStores } from './components/FreebStore';

export default function App() {
  const [stores, setStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => setStores(await getStores()))()
    .then(() => setIsLoading(false));
  }, []);
  
  return isLoading ? null : <FreebMap stores={stores} />;
}
