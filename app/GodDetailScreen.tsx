import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getSelectedGod } from './selectedGod';
import { GodClass } from './godsData';

// Map class to icon with type assertion
const classIcons: Record<GodClass, keyof typeof Ionicons.glyphMap> = {
    [GodClass.Assassin]: "skull-outline",
    [GodClass.Guardian]: "shield-outline",
    [GodClass.Hunter]: "send-outline",
    [GodClass.Mage]: "flame-outline",
    [GodClass.Warrior]: "eyedrop-outline",
};

const GodDetailScreen: React.FC = () => {
    const god = getSelectedGod();
    const [selectedAbility, setSelectedAbility] = useState<number | null>(null);

    if (!god) {
        return <Text>God not found.</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={god.imageUrl} style={styles.image} />
            <Text style={styles.name}>{god.name}</Text>
            <View style={styles.classContainer}>
                <Ionicons name={classIcons[god.class]} size={20} color="#888" />
                <Text style={styles.class}>{god.class}</Text>
            </View>
            <Text style={styles.description}>{god.description || "No description available."}</Text>
            {/* Add other parts of the UI */}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    classContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    class: {
        fontSize: 16,
        fontStyle: 'italic',
        color: '#888',
        marginLeft: 5,
    },
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
    },
});

export default GodDetailScreen;