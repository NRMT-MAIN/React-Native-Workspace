import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
  function openWebsite(websiteUrl: string) {
    Linking.openURL(websiteUrl)
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card , styles.cardElevated]}>
        <View style={styles.headingContainer}>
            <Text style={styles.headerText}>Latest Blog Post</Text>
        </View>
        <Image
            source={{
                uri: 'https://th.bing.com/th/id/OIF.TOH1Cp3bidkiGWFQIyjLyA?w=270&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
            }}
            style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardText}>
                This is the content of the blog post. It provides a brief overview of the latest news and updates.
            </Text>
        </View>
        <View style={styles.cardFooter}>
            <TouchableOpacity onPress={() => openWebsite('https://nrmt-main.me')}>
                <Text>Read More</Text>
            </TouchableOpacity>
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
        flex: 1,
        width : 350,
        height : 340,
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
    headingContainer : {
        padding : 8,
        backgroundColor: '#50DBB4',
        flexDirection: 'row',
        justifyContent: 'center',
    } ,
    headerText : {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff'
    },
    cardBody : {
        padding : 16
    },
    cardText : {
        fontSize: 16,
        lineHeight: 24
    },
    cardFooter : {
        padding : 5,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    cardButtonText : {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#007AFF'
    }
})