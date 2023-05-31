import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ProjectInfo from '../src/components/ProjectInfo';
import CircleItem from '../src/components/CirceItem';
import CardStatus from '../src/components/CardStatus';
import { getProjectList } from '../api';
import ProjectComents from '../src/components/ProjectComents';
import ProjectLinks from '../src/components/ProjectLinks';

export default function HomeScreen({navigation}) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            const response = await getProjectList();
            if (response.length > 0) {
                setItems(response);
            }
        };
        fetchItems();
    }, []);

    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Text style={styles.wellcomeText}>Ola, <Text style={styles.strong}>Jhon Doe</Text></Text>
                    <TouchableHighlight onPress={() => navigation.navigate('MenuScreen')}>
                        <>
                            <View style={{ borderRadius: 5, width: 40, height: 3, backgroundColor: '#fff' }} />
                            <View style={{ borderRadius: 5, width: 40, height: 3, backgroundColor: '#fff', marginTop: 8 }} />
                            <View style={{ borderRadius: 5, width: 40, height: 3, backgroundColor: '#fff', marginTop: 8 }} />
                        </>
                    </TouchableHighlight>
                </View>
                <Text style={styles.title}>Status do projeto</Text>
                <Text style={styles.titleBold}>Blog - Hotel Ibis</Text>
            </View>
            <View style={styles.containerContent}>
                <ProjectInfo />
                <View style={styles.listItems}>
                    <CircleItem color={'#D9D9D9'} text={'A fazer'} />
                    <CircleItem color={'#379BD3'} text={'Em andamento'} />
                    <CircleItem color={'#69D28D'} text={'Concluído'} />
                    <CircleItem color={'#D40000'} text={'Cancelado'} />
                    <CircleItem color={'#500000'} text={'Bloqueado'} />
                </View>
                <View style={{ marginTop: 50 }}>
                    {items.map((item,index) => <CardStatus title={item.fields.summary} items={item.fields.subtasks} status={item.fields.status.name} />)}
                </View>
                <ProjectComents cards={[{date: '00/00/0000', text: 'Lorem ipsum dolor sit'}]} />
                <ProjectLinks  links={[{title: 'Lorem ipsum dolor', url: 'https://www.youtube.com'}]}/>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        paddingTop: 70,
        backgroundColor: '#2d2d2d',
        borderBottomRightRadius: 50,
    },
    headerTop: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 25
    },
    containerContent: {
        padding: 20,
        paddingTop: 30
    },
    wellcomeText: {
        fontSize: 16,
        color: '#fff'
    },
    strong: {
        fontWeight: 800
    },
    title: {
        fontSize: 24,
        fontWeight: 300,
        color: '#fff'
    },
    titleBold: {
        fontSize: 24,
        fontWeight: 800,
        color: '#fff'
    },
    listItems: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        flexWrap: 'wrap'
    }
});