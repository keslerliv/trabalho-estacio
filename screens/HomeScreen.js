import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import ProjectInfo from '../src/components/ProjectInfo';
import CircleItem from '../src/components/CirceItem';
import CardStatus from '../src/components/CardStatus';
import { getProjectList } from '../api';
import ProjectComents from '../src/components/ProjectComents';
import ProjectLinks from '../src/components/ProjectLinks';
import { getProjects } from '../api/projects';

export default function HomeScreen({ route, navigation }) {
    const { uid } = route.params;

    const [items, setItems] = useState([]);
    const [project, setProject] = useState({});

    const fetchItems = async (project) => {
        const response = await getProjectList(project);
        if (response.length > 0) {
            setItems(response);
        }
    };

    const getProjectsCall = async () => {
        try {
            const projects = await getProjects(uid);
            const project = projects.project[0].id;
            setProject({
                name: projects.project[0].name,
                id: projects.project[0].id,
                links: projects.project[0].links,
                comments: projects.project[0].comments,
            })
            fetchItems(project);
        } catch (error) {
        }
    };

    useEffect(() => {
        getProjectsCall();
    }, []);

    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <Text style={styles.wellcomeText}>Ola, <Text style={styles.strong}>Jhon Doe</Text></Text>
                    <TouchableHighlight onPress={() => navigation.navigate('MenuScreen', {uid: uid, project: project})}>
                        <>
                            <View style={{ borderRadius: 5, width: 40, height: 3, backgroundColor: '#fff' }} />
                            <View style={{ borderRadius: 5, width: 40, height: 3, backgroundColor: '#fff', marginTop: 8 }} />
                            <View style={{ borderRadius: 5, width: 40, height: 3, backgroundColor: '#fff', marginTop: 8 }} />
                        </>
                    </TouchableHighlight>
                </View>
                <Text style={styles.title}>Status do projeto</Text>
                <Text style={styles.titleBold}>{project.name}</Text>
            </View>
            <View style={styles.containerContent}>
                <ProjectInfo items={items} />
                <View style={styles.listItems}>
                    <CircleItem color={'#D9D9D9'} text={'A fazer'} />
                    <CircleItem color={'#379BD3'} text={'Em andamento'} />
                    <CircleItem color={'#69D28D'} text={'Concluído'} />
                    <CircleItem color={'#D40000'} text={'Cancelado'} />
                    <CircleItem color={'#500000'} text={'Bloqueado'} />
                </View>
                <View style={{ marginTop: 50 }}>
                    {items.map((item, index) => <CardStatus key={index} title={item.fields.summary} items={item.fields.subtasks} status={item.fields.status.name} />)}
                </View>
                <ProjectComents cards={project.comments} />
                <ProjectLinks links={project.links} />
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