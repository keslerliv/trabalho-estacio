import { View, Button, StyleSheet, Image, TextInput } from 'react-native';

import Logo from '../assets/images/Logo.png';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />

            <TextInput style={styles.input} />

            <Button
                title="Entrar"
                onPress={() => navigation.navigate('HomeScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    logo: {
        width: 166,
        height: 59,
        marginBottom: 30
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
        padding: 20,
    }
});