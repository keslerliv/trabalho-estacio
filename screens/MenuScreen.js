import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MenuScreen() {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text>Item</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d'
    }
});