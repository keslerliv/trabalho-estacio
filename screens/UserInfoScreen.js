import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const UserInfoScreen = ({ navigation }) => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [telefone, setTelefone] = useState('');

    const handleSave = () => {
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('CPF:', cpf);
        console.log('CNPJ:', cnpj);
        console.log('Telefone:', telefone);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerButton} onPress={() => navigation.navigate("HomeScreen")}>
                    <View style={styles.arrowContainer}>
                        <Icon name="arrow-left" size={25} color="#fff" />
                    </View>
                </TouchableOpacity>
                <Text style={styles.headerText}>
                    Informações do{' '}
                    <Text style={styles.boldText}>Usuário</Text>
                </Text>
            </View>

            <View style={styles.userInfo}>
                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite seu nome"
                />

                <Text style={styles.label}>Email:</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Digite seu email"
                />

                <Text style={styles.label}>Telefone:</Text>
                <TextInput
                    style={styles.input}
                    value={telefone}
                    onChangeText={setTelefone}
                    placeholder="Digite seu telefone"
                />

                <Text style={styles.label}>CPF:</Text>
                <TextInput
                    style={styles.input}
                    value={cpf}
                    onChangeText={setCpf}
                    placeholder="Digite seu CPF"
                />

                <Text style={styles.label}>CNPJ:</Text>
                <TextInput
                    style={styles.input}
                    value={cnpj}
                    onChangeText={setCnpj}
                    placeholder="Digite seu CNPJ"
                />

                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                    <Text style={styles.saveButtonText}>SALVAR</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 40,
        paddingTop: 100,
        backgroundColor: '#2d2d2d',
        borderBottomRightRadius: 50,
    },
    userInfo: {
        padding: 20,
    },
    headerButton: {
        marginRight: 15,
        marginLeft: 20,
    },
    arrowContainer: {
        backgroundColor: 'rgba(192, 192, 192, 0.3)',
        borderRadius: 7,
        padding: 7,
    },
    headerText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'normal',
    },
    boldText: {
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 7,
        marginBottom: 40,
        paddingHorizontal: 8,
    },
    saveButton: {
        backgroundColor: 'steelblue',
        borderRadius: 7,
        paddingVertical: 12,
    },
    saveButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default UserInfoScreen;