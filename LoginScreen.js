import { View, Button, StyleSheet, Image, TextInput, TouchableOpacity, Platform, Text } from 'react-native';

import Logo from '../assets/images/Logo.png';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={Logo} />

            <TextInput style={styles.input} 
            placeholder="Email"
            />

            <TextInput style={styles.input} 
            placeholder="Senha"
            />

            <View style={styles.forgotContainer}>
                <TouchableOpacity>
                    <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginButton}>
                <Text style={styles.loginText}>Acessar</Text>
                onPress={() => navigation.navigate('HomeScreen')}
            </TouchableOpacity>
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
        marginTop: Platform.OS === 'android' ? '13%' : '20%',
        width: 166,
        height: 59,
        marginBottom: 30
    },
    input: {
        width: '100%',
        backgroundColor: '#F4F3F3',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 20,
        borderRadius: 5
    },
    forgotContainer: {
        width: '100%',
        alignItems: 'flex-end',
    },
    forgotText: {
        color:'#000',
    },
    loginButton:{
        marginTop: '5%',
        backgroundColor: '#000000',
        width: '100%',
        height: '42',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    loginText:{
        color: '#FFF',
        fontSize: 17,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
