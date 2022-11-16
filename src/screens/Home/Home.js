import { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Card } from '../../components/Card';
import { Title } from '../../components/Title';
import { useSelector, useDispatch } from 'react-redux'


const Home = () => {
  const cardProducts = useSelector((state) => state)
  // const dispatch = useDispatch()

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const response = await fetch('http://fakestoreapi.com/products')
    const data = await response.json()
    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Title title={'React Advanced'} />
      { products?.map((product) => <Card {...product} key={product.id} />) }
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
