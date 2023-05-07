import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardStatus({ title, items, status }) {

    const getColor = () => {
        switch (status) {
            case 0:
                return '#D9D9D9';
            case 1:
                return '#379BD3';
            case 2:
                return '#69D28D';
            case 3:
                return '#D40000';
            case 4:
                return '#500000';
        }
    }

    return (
        <View style={{marginBottom: 10}}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10' }}>
                <View style={{ width: 12, height: 12, borderRadius: 8, backgroundColor: getColor() }} />
                <Text style={{ fontSize: 20 }}>{title}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 22, padding: 15, gap: 10 }}>
                <View style={{ width: 3, height: '100%', backgroundColor: '#D9D9D9' }} />
                <View>
                    {items.map((item) => <Text style={{ fontSize: 16, lineHeight: 25 }}>{item}</Text>)}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
});