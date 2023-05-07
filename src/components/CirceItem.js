import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CircleItem({ color, text }) {
    return (
        <View style={styles.container}>
            <View style={{ width: 12, height: 12, borderRadius: 8, backgroundColor: color }} />
            <Text style={{fontSize: 16}}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 5
    },
});