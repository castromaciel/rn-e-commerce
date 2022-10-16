import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

const Card = ({ product }) => {
  return (
    <View style={styles.cards} key={product.id}>
      <Text style={styles.titleCard}>{product.name}</Text>
      <Image style={styles.image} source={product.image} />
      <Text style={styles.priceCard}>Price: ${product.id * 10},00</Text>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  cards: {
    width: '100%',
    height: 340,
    border: '1px solid #265968',
    marginVertical: 20,
  },
  titleCard: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 'auto'
  },
  priceCard: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 'auto'
  },
  image: {
    width: '100%',
    height: 260,
   }
})