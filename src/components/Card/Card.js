import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native'
import { Button, Card, Paragraph } from 'react-native-paper';
import { useDispatch } from 'react-redux'
import { addProduct } from '../../app/productSlice';

const RNCard = ({ id, image, description, price, title }) => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  
  const onGoinTo = () => {
    dispatch(addProduct({id, image, description, price, title}))
  }
  
  return (
    <Card style={styles.card}>
      <Card.Title title={title} />
      <Card.Cover source={{ uri: image }} />
      <Card.Content>
        <Paragraph style={styles.description}>
          {description}
        </Paragraph>
        <Paragraph style={styles.price}>
          Precio: ${price}
        </Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button
          onPress={onGoinTo}
        >
          Añadir al carrito
        </Button>
        <Button
          onPress={() => navigation.navigate('Product detail')}
        >
          Comprar
        </Button>
      </Card.Actions>
    </Card>
  )
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
  },
  description: {
    marginVertical: 8,
  },
  price: {
    marginVertical: 8,
  }
})

export default RNCard
