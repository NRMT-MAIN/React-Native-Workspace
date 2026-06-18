import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Constants
import { currencyByRupee } from './constants';
import CurrencyButton from './components/CurrencyButton';

// Components
import { Snackbar } from 'react-native-snackbar';
import React, { JSX, useState} from 'react';

function App() : JSX.Element {

  const [inputValue, setInputValue] = useState('');
  const [resultValue, setResultValue] = useState(0);
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue: Currency) => {
    if (inputValue === '') {
      Snackbar.show({
        text: 'Please enter an amount in Rupees',
        duration: Snackbar.LENGTH_SHORT,
        textColor: '#fff',
      });
      return;
    }
    const result = parseFloat(inputValue) * targetValue.value;
    setResultValue(result);
    setTargetCurrency(targetValue.name);
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f5f7fb" />
        <View style={styles.topContainer}>
          <Text style={styles.heading}>Currency Converter</Text>
          <Text style={styles.subHeading}>Convert Rupees into major currencies instantly</Text>
          <View style={styles.rupeesContainer}>
            <Text style={styles.rupee}>₹</Text>
            <TextInput
              style={styles.inputAmountField}
              maxLength={10}
              placeholder="Enter amount in Rupees"
              placeholderTextColor="#8a94a6"
              keyboardType="numeric"
              value={inputValue}
              onChangeText={setInputValue}
            />
          </View>
        </View>
        <View style={styles.bottomContainer}>
          {resultValue && (
            <View style={styles.resultCard}>
              <Text style={styles.resultLabel}>Converted amount</Text>
              <Text style={styles.resultTxt}>{resultValue.toFixed(2)} {targetCurrency}</Text>
            </View>
          )}
        </View>
        <View style={styles.listContainer}>
          <FlatList
            contentContainerStyle={styles.listContent}
            numColumns={3}
            data={currencyByRupee}
            keyExtractor={ item => item.name}
            renderItem={({item}) => (
              <TouchableOpacity
                style={[styles.button, targetCurrency === item.name && styles.selected]}
                onPress={() => buttonPressed(item)}
              >
                <CurrencyButton
                  name={item.name}
                  value={item.value}
                  flag={item.flag}
                  symbol={item.symbol}
                  onPress={() => buttonPressed(item)}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
} 


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f7fb',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  topContainer: {
    paddingVertical: 20,
    gap: 12,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#13213c',
    letterSpacing: 0.3,
  },
  subHeading: {
    fontSize: 14,
    lineHeight: 20,
    color: '#667085',
  },
  resultTxt: {
    fontSize: 26,
    color: '#13213c',
    fontWeight: '800',
  },
  resultLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    color: '#667085',
    marginBottom: 6,
  },
  resultCard: {
    borderRadius: 20,
    backgroundColor: '#ffffff',
    padding: 18,
    borderWidth: 1,
    borderColor: '#e4e8f0',
    shadowColor: '#0f172a',
    shadowOpacity: 0.06,
    shadowRadius: 18,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    elevation: 2,
  },
  rupee: {
    marginRight: 10,
    fontSize: 22,
    color: '#13213c',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#d9deea',
    paddingHorizontal: 14,
    paddingVertical: 6,
    shadowColor: '#0f172a',
    shadowOpacity: 0.04,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    elevation: 1,
  },
  inputAmountField: {
    flex: 1,
    minHeight: 48,
    paddingVertical: 10,
    paddingHorizontal: 2,
    color: '#13213c',
    fontSize: 16,
  },
  bottomContainer: {
    marginBottom: 14,
  },
  listContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    margin: 6,
    borderRadius: 16,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: '#0f172a',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    paddingVertical: 14,
  },
  selected: {
    backgroundColor: '#dbeafe',
  },
  listContent: {
    paddingBottom: 24,
  },
});

export default App;
