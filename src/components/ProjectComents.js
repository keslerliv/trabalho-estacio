import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProjectComents({cards}) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Observações</Text>

            {cards.map((card) => <View style={styles.card}>
                <Text style={styles.cardTitle}>{card.date}</Text>
                <Text style={styles.cardDescription}>{card.text}</Text>
            </View>)}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    title: {
        fontSize: 20
    },
    card: {
        marginTop: 20,
        width: '100%',
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#FFE299'
    },
    cardTitle: {
        fontSize: 14,
        color: '#858585',
        marginBottom: 10
    },
    cardDescription: {
        fontSize: 16,
        color: '#858585'
    }
});