import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { setSelectedGod } from './selectedGod'; 

interface GodItemProps {
  god: {
    name: string;
    blurb: string;
    imageUrl: any;
  };
}

const GodItem: React.FC<GodItemProps> = ({ god }) => {
    return (
        <View style={styles.container}>
            <Image source={god.imageUrl} style={styles.image} />
            <Text style={styles.name}>{god.name}</Text>
            <Text style={styles.blurb}>{god.blurb}</Text>
            <Link 
                href="/GodDetailScreen"
                onPress={() => setSelectedGod(god)}
                style={styles.link}>
                View Details
            </Link>
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
    blurb: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        textAlign: 'center'
    },
    link: {
        fontSize: 16,
        color: '#ffd33d',
        marginTop: 10
    }
});

export default GodItem;