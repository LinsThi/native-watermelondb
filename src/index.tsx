import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { Home } from './screens/Home';

function App() {
  return (
    <>
      <StatusBar backgroundColor="#121115" style="light" />
      <Home />
    </>
  );
}
export default gestureHandlerRootHOC(App);
