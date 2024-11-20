import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getSelectedGod } from './selectedGod';
import { GodClass } from './godsData';
import { useTheme } from '../theme/ThemeContext'; 
import { Theme } from '../theme/themes';

const classIcons: Record<GodClass, keyof typeof Ionicons.glyphMap> = {
    [GodClass.Assassin]: "skull-outline",
    [GodClass.Guardian]: "shield-half",
    [GodClass.Hunter]: "send",
    [GodClass.Mage]: "flame-outline",
    [GodClass.Warrior]: "eyedrop-outline",
};

const GodDetailScreen: React.FC = () => {
    const { theme } = useTheme();
    console.log('Theme in GodDetailScreen:', theme);
    const god = getSelectedGod();
    const [selectedAbility, setSelectedAbility] = useState<number | null>(null);

    if (!god) {
        return <Text>God not found.</Text>;
    }

    const styles = getStyles(theme); // Call to getStyles with the current theme

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={god.imageUrl} style={styles.image} />
            <Text style={styles.name}>{god.name}</Text>
            <View style={styles.classContainer}>
                <Ionicons name={classIcons[god.class]} size={20} color={theme.text} />
                <Text style={styles.class}>{god.class}</Text>
            </View>
            <Text style={styles.range}>{god.range}</Text>
            <Text style={styles.description}>{god.description || "No description available."}</Text>

            <Text style={styles.sectionTitle}>Abilities</Text>
            <View style={styles.abilitiesContainer}>
                {god.abilities.map((ability, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.abilityItem}
                        onPress={() => setSelectedAbility(index === selectedAbility ? null : index)}
                        activeOpacity={1}
                    >
                        <Image source={ability.imageUrl} style={styles.abilityImage} />
                        <Text style={styles.abilityName}>{ability.name}</Text>
                        {selectedAbility === index && (
                            <View>
                                <Text style={styles.abilityDescription}>{ability.description}</Text>
                                <View style={styles.buffsContainer}>
                                    {ability.buffs.map((buff, buffIndex) => (
                                        <Text key={buffIndex} style={styles.buffText}>
                                            {`• ${buff}`}
                                        </Text>
                                    ))}
                                </View>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

function getStyles(theme: Theme) { // Properly typed theme parameter
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
        range: {
            fontSize: 16,
            fontStyle: 'italic',
            color: theme.text,
            marginTop: 5,
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
        buffsContainer: {
            marginTop: 10,
            padding: 10,
            backgroundColor: theme.surface,
            borderRadius: 8,
        },
        buffText: {
            fontSize: 14,
            textAlign: 'left',
            color: theme.text,
            marginBottom: 5,
        },
    });
}

export default GodDetailScreen;