import { View, Text, ScrollView} from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import { SafeAreaView } from 'react-native-safe-area-context'
import ElevatedCards from './components/ElevatedCards'
import FancyCards from './components/FancyCards'
import ActionCard from './components/ActionCard'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCards />
        <FancyCards />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>

  )
}

export default App