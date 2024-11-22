import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getSelectedGod } from './selectedGod';
import { useTheme } from '../theme/ThemeContext'; 

const GodDetailScreen: React.FC = () => {
    const { theme } = useTheme();
    console.log('Theme in GodDetailScreen:', theme);
    const god = getSelectedGod();
    const [selectedAbility, setSelectedAbility] = useState<number | null>(null);

    if (!god) {
        return <Text>God not found.</Text>;
    }

    const styles = getStyles(theme); // Call to getStyles with the current theme
    const classIcon = god.Attributes['Class:'].replace(',', ''); // Removing comma if it exists

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: god.Attributes.imageURL }} style={styles.image} />
            <Text style={styles.name}>{god.Name}</Text>
            <View style={styles.classContainer}>
                <Ionicons name={classIcons[classIcon]} size={20} color={theme.text} />
                <Text style={styles.class}>{god.Attributes['Class:']}</Text>
            </View>
            <Text style={styles.description}>{god.Attributes['Title:']}</Text>

            <Text style={styles.sectionTitle}>Abilities</Text>
            <View style={styles.abilitiesContainer}>
                {god.Abilities.map((ability, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.abilityItem}
                        onPress={() => setSelectedAbility(index === selectedAbility ? null : index)}
                        activeOpacity={1}
                    >
                        <Image source={{ uri: ability.imageURL }} style={styles.abilityImage} />
                        <Text style={styles.abilityName}>{ability.name}</Text>
                        {selectedAbility === index && (
                            <View>
                                <Text style={styles.abilityDescription}>{ability.description}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

// Define your icon mappings outside of the component
const classIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
    Assassin: "skull-outline",
    Guardian: "shield-half",
    Hunter: "send",
    Mage: "flame-outline",
    Warrior: "eyedrop-outline",
};

function getStyles(theme: any) { // Properly typed theme parameter
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
    });
}

export default GodDetailScreen;