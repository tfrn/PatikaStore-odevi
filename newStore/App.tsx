import React from 'react';
import { View } from 'react-native';
import Title from './src/components/title';
import Products from './src/components/products';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Title></Title>
      <Products></Products>
    </View>
  );
};

export default App;
