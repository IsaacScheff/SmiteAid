import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { getSelectedGod } from './selectedGod'; 

const GodDetailScreen: React.FC = () => {
    const god = getSelectedGod();

    if (!god) {
        return <Text>God not found.</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={god.imageUrl} style={styles.image} />
            <Text style={styles.name}>{god.name}</Text>
            <Text style={styles.description}>{god.description || "No description available."}</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center'
    }
});

export default GodDetailScreen;