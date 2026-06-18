import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <Image 
            source={{
                uri: 'https://tse1.mm.bing.net/th/id/OIP.CSUhF_Oaaw-46sucYkrHOwHaE4?rs=1&pid=ImgDetMain&o=7&rm=3'
            }} 
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>Japanese Culture</Text>
            <Text style={styles.cardLabel}>Osaka , Japan</Text>
            <Text style={styles.cardDescriptions}>Experience the rich culture and traditions of Japan in the vibrant city of Osaka.</Text>
            <Text style={styles.cardFooter}>Explore Now</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  } , 
  card : {
    width : 350,
    height : 350,
    borderRadius : 8,
    margin : 16,
    backgroundColor: '#fff',
    padding: 2,
  } , 
  cardElevated : {
    elevation: 4,
    shadowOffset: {
        width: 1,   
        height: 1
    } , 
    shadowColor : '#333', 
    shadowOpacity : 0.4 , 
    shadowRadius : 4
  } , 
  cardImage  : {
    height : 180
  } ,
  cardBody : {
    flex: 1,
    flexGrow: 1,
    padding: 10
  } ,
  cardTitle : {
    fontSize: 18,
    fontWeight: 'bold'
  } ,
  cardLabel : {
    fontSize: 14,
    color: 'gray' ,
    marginBottom: 8
  } ,
  cardDescriptions : {
    fontSize: 15,
    color: 'black' , 
    marginBottom: 12
  } ,
  cardFooter : {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue'
  }
})