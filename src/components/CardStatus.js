import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardStatus({ title, items, status }) {

    const getColor = () => {
        switch (status) {
            case 'Aberto':
                return '#D9D9D9';
            case 'Em andamento':
                return '#379BD3';
            case 'Concluído':
                return '#69D28D';
            case 'Cancelado':
                return '#D40000';
            case 'Bloqueado':
                return '#500000';
            default:
                return '#D9D9D9';
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'start', gap: '10' }}>
                <View style={{ width: 12, height: 12, borderRadius: 8, backgroundColor: getColor(), marginTop: 7 }} />
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', paddingLeft: 22, padding: 15, gap: 10 }}>
                <View style={{ width: 3, height: '100%', backgroundColor: '#D9D9D9' }} />
                <View>
                    {items.map((item) => <Text style={styles.info}>{item.fields.summary}</Text>)}
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        paddingRight: 20
    },
    title: { 
        fontSize: 20, 
        fontWeight: 200 
    },
    info: { 
        fontSize: 16, 
        lineHeight: 25, 
        fontWeight: 200 
    }
});