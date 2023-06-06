import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import close from '../assets/icons/close.png';

export default function MenuScreen({ route, navigation }) {
    const { uid, project } = route.params;

    const [showSubitems, setShowSubitems] = useState(false);

    const handleItem1Press = () => {
        setShowSubitems(!showSubitems);
    };

    const handleCloseMenu = () => {
        navigation.navigate("HomeScreen", { uid: uid });
    }

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity onPress={() => handleCloseMenu()} >
                <Image style={styles.Image} source={close} />
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={handleItem1Press}>
                <View>
                    <Text style={styles.text}>Trocar de projetos</Text>
                </View>
            </TouchableWithoutFeedback>

            {showSubitems && (
                <View style={styles.subitemsContainer}>
                    <TouchableOpacity onPress={() => handleCloseMenu()} >
                        <Text style={styles.subitemText}>{project.name}</Text>
                    </TouchableOpacity>
                </View>
            )}

            <View style={styles.profileContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("UserInfoScreen", {uid: uid})}>
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