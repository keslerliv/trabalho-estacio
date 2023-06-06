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

export default function LoginScreen({ navigation }) {
    const [showPopup, setShowPopup] = useState(true);

    const onClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Image style={styles.logo} source={Logo} />

                    <TextInput style={styles.input} placeholder="Email" />
                    <TextInput style={styles.input} placeholder="Senha" />
                    <View style={styles.forgotContainer}>
                        {showPopup && (
                            <BottomPopup
                                title="Esqueceu sua senha?"
                                onTouchOutside={onClosePopup}
                            />
                        )}
                        <TouchableOpacity onPress={onClosePopup}>
                            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={styles.loginButton}
                        onPress={() => navigation.navigate("HomeScreen")}
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
});
