import React, { useState } from 'react';
import { View, Text, FlatList, Image, TextInput } from 'react-native';
import productData from "../jsondata/product_data.json"
import Styles from './styles';

const Products = () => {
  const [products, setProducts] = useState(productData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query === '') {
      setProducts(productData);
      return;
    }
    const filteredProducts = productData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setProducts(filteredProducts);
  };
    // *********
        // detay sayfasına yönlendirmek için onpress özelliği kullanılacaksa renderItem'de tanımlama yapmak lazım. 
    // *********
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, flexDirection: 'row', paddingVertical: 10 }}>
      <Image source={{ uri: item.imgURL }} style={{ width: 100, height: 100 }} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={{ fontSize: 18 }}>{item.title}</Text>
        <Text style={{ fontSize: 16, color: 'gray' }}>{item.price}</Text>
        {item.inStock ? (
          <Text style={{ fontSize: 16, color: 'green' }}>In Stock</Text>
        ) : (
          <Text style={{ fontSize: 16, color: 'red' }}>Out of Stock</Text>
        )}
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      
      <TextInput
        style={Styles.input}
        placeholder="Arama yapın"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {products.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 20 }}>Ürün bulunamadı.</Text>
      ) : (
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      )}
    </View>
  );
};

export default Products;
