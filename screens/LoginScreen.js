import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    Platform,
    Text,
    KeyboardAvoidingView,
    Keyboard,
    TouchableWithoutFeedback,
} from "react-native";
import Logo from "../assets/images/Logo.png";
import BottomPopup from "../components/BottomPopup";
import { loginUser } from "../api/login";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [error, setError] = useState('');

    const onClosePopup = () => {
        setShowPopup(false);
    };

    const handleLogin = async (email, password) => {
        try {
            const user = await loginUser(email, password);
            if (user.email) {
                navigation.navigate("HomeScreen", { uid: user.uid });
            } else {
                setError('Usuário e/ou senha incorreto.');
            }
        } catch (error) {
            setError('Ocorreu um erro durante o login.');
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={Logo} />

                    {error &&
                        <Text style={styles.errorMessage}>{error}</Text>
                    }

                    <TextInput style={styles.input} placeholder="Email" onChangeText={(value) => setEmail(value)} value={email} />
                    <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} onChangeText={(value) => setPassword(value)} value={password} />

                    <View style={styles.forgotContainer}>
                        {showPopup && (
                            <BottomPopup
                                status={showPopup}
                                closeModal={() => onClosePopup()}
                                title="Esqueceu sua senha?"
                                onTouchOutside={() => setShowPopup(false)}
                            />
                        )}
                        <TouchableOpacity onPress={() => setShowPopup(true)}>
                            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => handleLogin(email, password)}
                    >
                        <Text style={styles.loginText}>Acessar</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    logo: {
        marginBottom: 100,
    },
    input: {
        width: "90%",
        height: 42,
        backgroundColor: "#F4F3F3",
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E0E0E0",
    },
    forgotContainer: {
        width: "90%",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#000000",
    },
    loginButton: {
        marginTop: 50,
        backgroundColor: "#000000",
        width: "90%",
        height: 42,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
    loginText: {
        color: "#FFF",
        fontSize: 17,
    },
    errorMessage: {
        color: '#f00',
        marginBottom: 20
    }
});
