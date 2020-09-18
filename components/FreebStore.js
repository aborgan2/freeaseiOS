import firestore from '@react-native-firebase/firestore';

export const getStores = async () => {
  const snapshot = await firestore().collection('storesTest').get();
  if(!Array.isArray(snapshot.docs)) throw new Error("Unable to find Freebies");
  return snapshot.docs.map(doc => doc.data());
};