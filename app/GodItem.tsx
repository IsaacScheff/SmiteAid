import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface GodItemProps {
    god: {
        name: string;
        description: string;
        imageUrl: any;
    };
}

const GodItem: React.FC<GodItemProps> = ({ god }) => {
    return (
        <View style={styles.container}>
            <Image source={god.imageUrl} style={styles.image} />
            <Text style={styles.name}>{god.name}</Text>
            <Text style={styles.description}>{god.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        textAlign: 'center'
    }
});

export default GodItem;