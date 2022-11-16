import { useEffect, useState } from 'react';
import { StyleSheet, View, ScrollView, Button} from 'react-native';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character')
    const {results: data} = await response.json()
    setProducts(data)
  }

  const handleNavigate = () => {
    navigation.navigate("Product detail")
  }

  useEffect(() => {
    getProducts()
  }, [])

  useEffect(() => {
    console.log(products)
  }, [products])

  return (
    <ScrollView style={styles.container}>
      <Title title={'React Advanced'} />
      <Button 
        onPress={handleNavigate}
        title="LearnMore"
      />
      { products?.map((product) => <Card product={product} key={product.id} /> )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#30323D',
  },
});

export default Home;
