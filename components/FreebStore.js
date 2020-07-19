import firestore from '@react-native-firebase/firestore';

export const getStores = async () => {
  const snapshot = await firestore().collection('storesTest').get();
  return snapshot.docs.map(doc => docApiMap(doc));
};

export const docApiMap = doc => ({
  latitude: Number(doc.data().Latitude),
  longitude: Number(doc.data().Longitude),
  markerType: Number(doc.data().Icon),
  imageUrl: doc.data().ImageUrl,
  description: doc.data().Description,
  name: doc.data().Name,
  address: doc.data().Address,
  freeb: doc.data().Freeb,
});
