
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { setSelectedGod } from './selectedGod'; 
import { GodClass, Range } from './godsData';
import { Ionicons } from '@expo/vector-icons';

const classIcons: Record<GodClass, keyof typeof Ionicons.glyphMap> = {
    [GodClass.Assassin]: "skull-outline",
    [GodClass.Guardian]: "shield-outline",
    [GodClass.Hunter]: "send-outline",
    [GodClass.Mage]: "flame-outline",
    [GodClass.Warrior]: "eyedrop-outline",
};

interface GodItemProps {
  god: {
    name: string;
    class: GodClass;
    range: Range
    blurb: string;
    imageUrl: any;
    abilities: any;
  };
}

const GodItem: React.FC<GodItemProps> = ({ god }) => {
    return (
        <View style={styles.container}>
            <Image source={god.imageUrl} style={styles.image} />
            <Text style={styles.name}>{god.name}</Text>
            {/* Added class and icon */}
            <View style={styles.classContainer}>
                <Ionicons name={classIcons[god.class]} size={16} color="#888" />
                <Text style={styles.class}>{god.class}</Text>
            </View>
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
    classContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    class: {
        fontSize: 14,
        fontStyle: 'italic',
        color: '#888',
        marginLeft: 5, // Spacing between icon and text
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