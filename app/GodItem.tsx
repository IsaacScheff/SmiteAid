import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { setSelectedGod } from './selectedGod'; 
import { God } from './selectedGod';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext'; 

// Define the valid keys for god classes
type GodClassKey = 'Assassin' | 'Guardian' | 'Hunter' | 'Mage' | 'Warrior';

const godClassIconMapping: Record<GodClassKey, keyof typeof Ionicons.glyphMap> = {
    Assassin: "skull-outline",
    Guardian: "shield-half",
    Hunter: "send",
    Mage: "flame-outline",
    Warrior: "eyedrop-outline",
};

const GodItem: React.FC<{ god: God }> = ({ god }) => {
    const { theme } = useTheme();
    const godClass = god.Attributes['Class:'] as GodClassKey; // Assume it's valid for now

    // Check if the class is valid and get the corresponding icon
    const classIcon = godClassIconMapping[godClass] ?? 'alert'; // Use a fallback icon if the class is invalid

    return (
        <View style={[styles.container, { borderBottomColor: theme.secondary }]}>
            <Link 
                href="/GodDetailScreen"
                onPress={() => setSelectedGod(god)}
                style={styles.link}>
                <Image source={{ uri: god.Attributes['imageURL'] }} style={styles.image} />
            </Link>
            <Text style={[styles.name, { color: theme.text }]}>{god.Name}</Text>
            <View style={styles.classContainer}>
                <Ionicons name={classIcon} size={16} color={theme.text} />
                <Text style={[styles.class, { color: theme.text }]}>{godClass}</Text>
            </View>
            <Text style={[styles.blurb, { color: theme.text }]}>{god.Attributes['Title:']}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
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
        marginLeft: 5,
    },
    blurb: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    link: {
        fontSize: 16,
        marginTop: 10,
    }
});

export default GodItem;