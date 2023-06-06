import * as React from 'react';
import { Linking, StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default function ProjectLinks({ links }) {
    const handleOpenLink = (url) => {
        Linking.openURL(url);
    }

    if(!links){
        return <></>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Links úteis</Text>
            {links.map((link) => <View style={styles.link}>
                <TouchableHighlight onPress={() => {handleOpenLink(link.url)}} underlayColor="transparent">
                    <Text style={styles.linkTitle}>{link.title} ➡️</Text>
                </TouchableHighlight>
            </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        marginBottom: 90
    },
    title: {
        fontSize: 20
    },
    link: {
        width: '100%',
        marginTop: 15,
        flexDirection: 'row',
        display: 'flex',
        gap: 15
    },
    linkTitle: {
        fontSize: 14,
        color: '#858585',
        marginBottom: 10
    },
});