import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from './src/components/Card';
import { Title } from './src/components/Title';

const App = () => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const {results: data} = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <View style={styles.container}>
      <Title title={'React Advanced'}/>
      { products?.map((product) => <Card product={product} /> )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fdfdfd'
  },
});

export default App;
