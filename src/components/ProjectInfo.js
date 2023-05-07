import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProjectInfo() {
    return (
        <View>
            <Text style={{ fontSize: 16 }}>Andamento total do projeto</Text>
            <View style={styles.progress}>
                <View style={{ height: 15, width: '88%', backgroundColor: '#D9D9D9', borderRadius: 8 }}>
                    <View style={{ height: '100%', width: '50%', backgroundColor: '#69D28D', borderRadius: 8 }} />
                </View>
                <Text>50%</Text>
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