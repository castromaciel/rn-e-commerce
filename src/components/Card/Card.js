import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';

const Card = ({ product }) => {
  return (
    <View style={styles.cards} key={product.id}>
      <View style={styles.headerCard}>
        <Text style={styles.titleCard}>{product.name}</Text>
        <Text style={styles.specieCard}>{product.species}</Text>
      </View>
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
    border: '1px solid #E8C547',
    marginVertical: 20,
  },
  headerCard: {
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  titleCard: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fdfdfd',
  },
  specieCard: {
    fontSize: 16,
    color: '#fdfdfd'
  },
  priceCard: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 'auto',
    color: '#fdfdfd'
  },
  image: {
    width: '100%',
    height: 260,
   }
})