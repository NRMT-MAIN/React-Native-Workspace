import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
  const contacts = [
    { 
        id: '1', 
        name: 'John Doe',
        text: 'Hello, how are you?',
        imageUrl: 'https://th.bing.com/th/id/OIP.JpSI8TwsuDohNcTUOY_NiAHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
    },
    { 
        id: '2', 
        name: 'Jane Smith',
        text: 'Hey, are you available for a meeting tomorrow?',
        imageUrl: 'data:image/webp;base64,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'
    },
    { 
        id: '3', 
        name: 'Bob Johnson',
        text: 'Can you send me the report by the end of the day?',
        imageUrl: 'https://th.bing.com/th/id/OIP.hcbekvVpOTx1TcfKMjiBYwHaG8?w=189&h=180&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
    } , 
    { 
        id: '4', 
        name: 'Alice Williams',
        text: 'Let\'s catch up over coffee sometime next week.',
        imageUrl: 'https://th.bing.com/th/id/OIP.R5-qcshVQ2hylYF7aLdyRgHaHX?w=216&h=215&c=7&r=0&o=7&dpr=1.4&pid=1.7&rm=3'
    } ,
  ]

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.container} scrollEnabled={true}>
        {contacts.map((contact) => (
            <View key={contact.id} style={styles.userCard}>
                <Image
                    source={{ uri: contact.imageUrl }}
                    style={styles.userImage}
                />
                <View style={{ flex: 1 }}>
                    <Text style={styles.userName}>{contact.name}</Text>
                    <Text style={styles.userText}>{contact.text}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    paddingHorizontal: 16
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#c015da',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f5f3f3'
  },
  userText: {
    fontSize: 14,
    color: '#f2c5c5'
  }
})