import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProjectInfo({ items }) {

    if (!items) {
        return <></>;
    }

    let success = 0;

    items.map((item, index) => {
        const status = item.fields.status.name;
        if (status === 'Concluído') {
            success++;
        }
    })

    return (
        <View>
            <Text style={{ fontSize: 16 }}>Andamento total do projeto</Text>
            <View style={styles.progress}>
                <View style={{ height: 15, width: '88%', backgroundColor: '#D9D9D9', borderRadius: 8 }}>
                    <View style={{ height: '100%', width: `${parseInt((success * 100) / items.length)}%`, backgroundColor: '#69D28D', borderRadius: 8 }} />
                </View>
                <Text>{parseInt((success * 100) / items.length)}%</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    progress: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});