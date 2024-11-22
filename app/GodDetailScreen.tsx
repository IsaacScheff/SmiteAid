import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getSelectedGod } from './selectedGod';
import { useTheme } from '../theme/ThemeContext';

const classIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
    Assassin: "skull-outline",
    Guardian: "shield-half",
    Hunter: "send",
    Mage: "flame-outline",
    Warrior: "eyedrop-outline",
};

const GodDetailScreen: React.FC = () => {
    const { theme } = useTheme();
    const god = getSelectedGod();
    const [selectedAbility, setSelectedAbility] = useState<number | null>(null);
    const [showStats, setShowStats] = useState<boolean>(true);

    if (!god) {
        return <Text>God not found.</Text>;
    }

    const styles = getStyles(theme);

    const toggleStats = () => setShowStats(!showStats);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={god.Attributes.imageURL} style={styles.image} />
            <Text style={styles.name}>{god.Name}</Text>
            <View style={styles.classContainer}>
                <Ionicons name={classIcons[god.Attributes['Class:'].replace(',', '')]} size={20} color={theme.text} />
                <Text style={styles.class}>{god.Attributes['Class:']}</Text>
            </View>
            <Text style={styles.description}>{god.Attributes['Title:']}</Text>

            <TouchableOpacity onPress={toggleStats} style={styles.toggleButton}>
                <Text style={styles.toggleButtonText}>{showStats ? 'Hide Stats' : 'Show Stats'}</Text>
            </TouchableOpacity>

            {showStats && (
                <View style={styles.statsContainer}>
                    <Text style={styles.statText}>Type: {god.Attributes['Type:']}</Text>
                    <Text style={styles.statText}>Health: {god.Attributes['Health:']}</Text>
                    <Text style={styles.statText}>Mana: {god.Attributes['Mana:']}</Text>
                    <Text style={styles.statText}>Speed: {god.Attributes['Speed:']}</Text>
                    <Text style={styles.statText}>Range: {god.Attributes['Range:']}</Text>
                    <Text style={styles.statText}>Attack/Sec: {god.Attributes['Attack/Sec:']}</Text>
                    <Text style={styles.statText}>Damage: {god.Attributes['Damage:']}</Text>
                    <Text style={styles.statText}>Physical: {god.Attributes['Physical:']}</Text>
                    <Text style={styles.statText}>Magical: {god.Attributes['Magical:']}</Text>
                    <Text style={styles.statText}>HP5: {god.Attributes['HP5:']}</Text>
                    <Text style={styles.statText}>MP5: {god.Attributes['MP5:']}</Text>
                    <Text style={styles.statText}>Difficulty: {god.Attributes['Difficulty:']}</Text>
                    <Text style={styles.statText}>Release Date: {god.Attributes['Release date:']}</Text>
                </View>
            )}

            <Text style={styles.sectionTitle}>Abilities</Text>
            <View style={styles.abilitiesContainer}>
                {god.Abilities.map((ability, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.abilityItem}
                        onPress={() => setSelectedAbility(index === selectedAbility ? null : index)}
                        activeOpacity={1}
                    >
                        <Image source={ability.imageURL} style={styles.abilityImage} />
                        <Text style={styles.abilityName}>{ability.name}</Text>
                        {selectedAbility === index && (
                            <View style={styles.abilityDetailContainer}>
                                <Text style={styles.abilityDescription}>{ability.description}</Text>
                                {ability.notes.map((note, noteIndex) => (
                                    <Text key={noteIndex} style={styles.noteText}>• {note}</Text>
                                ))}
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};



function getStyles(theme: any) {
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            padding: 20,
            backgroundColor: theme.background,
        },
        image: {
            width: 200,
            height: 200,
            borderRadius: 100,
        },
        name: {
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.text,
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
            color: theme.text,
            marginLeft: 5,
        },
        description: {
            fontSize: 16,
            textAlign: 'center',
            color: theme.text,
            marginTop: 10,
        },
        sectionTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.text,
            marginTop: 30,
            marginBottom: 10,
        },
        abilitiesContainer: {
            width: '100%',
            alignItems: 'center',
        },
        abilityItem: {
            width: '90%',
            alignItems: 'center',
            marginVertical: 10,
            padding: 10,
            backgroundColor: theme.surface,
            borderRadius: 8,
        },
        abilityImage: {
            width: 80,
            height: 80,
        },
        abilityName: {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 10,
            color: theme.text,
        },
        abilityDescription: {
            fontSize: 14,
            textAlign: 'center',
            color: theme.text,
            marginTop: 5,
        },
        toggleButton: {
            marginTop: 20,
            padding: 10,
            backgroundColor: theme.buttonBackground,
            borderRadius: 5,
            alignSelf: 'center',
        },
        toggleButtonText: {
            color: theme.buttonText,
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        statsContainer: {
            width: '90%',
            padding: 10,
            backgroundColor: theme.surface,
            borderRadius: 8,
            marginTop: 10,
        },
        statText: {
            fontSize: 14,
            color: theme.text,
            marginBottom: 5,
            textAlign: 'left',
        },
        abilityDetailContainer: {
            padding: 10,
            backgroundColor: theme.surface,
            borderRadius: 8,
        },
        noteText: {
            fontSize: 12,
            color: theme.text,
            marginTop: 5,
            textAlign: 'center',
        },
    });
}

export default GodDetailScreen;
