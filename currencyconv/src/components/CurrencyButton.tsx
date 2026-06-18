import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type { JSX, PropsWithChildren } from 'react'

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  value: number;
  flag: string;
  symbol: string;
  onPress: () => void;
}>

const CurrencyButton = (props: CurrencyButtonProps) : JSX.Element => {
    return(
        <View style={styles.buttonContainer}>
            <Text style={styles.flag}>{props.flag}</Text>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.symbol}>{props.symbol}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
    },
    flag: {
        fontSize: 24,
        marginBottom: 8,
    },
    name: {
        fontSize: 13,
        fontWeight: '700',
        color: '#13213c',
        marginBottom: 4,
        textAlign: 'center',
    },
    symbol: {
        fontSize: 15,
        color: '#475467',
        marginBottom: 4,
    },
    value: {
        fontSize: 12,
        color: '#667085',
    }
})

export default CurrencyButton