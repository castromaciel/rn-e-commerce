import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native'
import { Button } from 'react-native-paper'
import { Card } from '../../components/Card'

const Cart = () => {
  
  const navigation = useNavigation()
  const { products } = useSelector((state) => state)

  console.log(products)

  return (
    <ScrollView>
      { products?.map(product => <Card {...product} key={product.id} /> )}
      <Button
        onPress={() => navigation.goBack()}
      >
        Volver al Home
      </Button> 
    </ScrollView>
  )
}

export default Cart