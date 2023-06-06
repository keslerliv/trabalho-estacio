import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import close from '../assets/icons/close.png';

export default function MenuScreen({ navigation }) {
    const [showSubitems, setShowSubitems] = useState(false);

    const handleItem1Press = () => {
        setShowSubitems(!showSubitems);
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity
                onPress={() => navigation.navigate("HomeScreen")} >
                <Image style={styles.Image} source={close} />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={handleItem1Press}>
                <View>
                    <Text style={styles.text}>Trocar de projetos</Text>
                </View>
            </TouchableWithoutFeedback>

            {showSubitems && (
                <View style={styles.subitemsContainer}>
                    <Text style={styles.subitemText}>Projeto 1</Text>
                    <Text style={styles.subitemText}>Projeto 2</Text>
                </View>
            )}

            <View style={styles.profileContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("UserInfoScreen")}>
                    <Text style={styles.text}>Meu Perfil</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d',
        padding: 30,
    },
    subitemsContainer: {
        marginLeft: 'auto',
        alignItems: 'flex-end',
    },
    profileContainer: {
        marginLeft: 'auto',
        alignItems: 'flex-end',
        marginTop: 45,
    },
    subitemText: {
        color: '#fff',
        fontSize: 22,
        marginTop: 25,
        fontWeight: 200
    },
    text: {
        marginLeft: 'auto',
        alignItems: 'flex-end',
        color: '#fff',
        fontSize: 34,
    },
    Image: {
        height: 60,
        width: 60,
        marginBottom: 40,
        marginTop: 50
    },
});