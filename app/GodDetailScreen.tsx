import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getSelectedGod } from './selectedGod';
import { useTheme } from '../theme/ThemeContext';
import averageStats from './average_god_stats.json';
import {Picker} from '@react-native-picker/picker';
import { Attributes, AverageStats } from './interfaces';

const classIcons: Record<string, keyof typeof Ionicons.glyphMap> = {
    Assassin: "skull-outline",
    Guardian: "shield-half",
    Hunter: "send",
    Mage: "flame-outline",
    Warrior: "eyedrop-outline",
};

const statKeysToShow = ['Health', 'Mana', 'Speed', 'Range', 'Attack/Sec', 'Damage', 'Physical', 'Magical', 'HP5', 'MP5', 'Difficulty', 'Release date'];

const GodDetailScreen: React.FC = () => {
    const { theme } = useTheme();
    const god = getSelectedGod();
    const [selectedAbility, setSelectedAbility] = useState<number | null>(null);
    const [showStats, setShowStats] = useState<boolean>(true);
    const [selectedComparison, setSelectedComparison] = useState('Average Overall');

    if (!god) {
        return <Text>God not found.</Text>;
    }

    const styles = getStyles(theme);
    
    const compareStats = (statName: string, godStat: string, avgStat: string) => {
        const parseStatValue = (stat: string): number => {
            const parts = stat.split(' (+');
            const baseValue = parseFloat(parts[0]);
            const incrementValue = parts.length > 1 ? parseFloat(parts[1].slice(0, -1)) * 20 : 0;
            return baseValue + incrementValue;
        };
    
        const godValue = parseStatValue(godStat);
        const avgValue = parseStatValue(avgStat);
    
        let godStyle, avgStyle;
        if (godValue > avgValue) {
            godStyle = styles.higherStat;
            avgStyle = styles.lowerStat;
        } else if (godValue < avgValue) {
            godStyle = styles.lowerStat;
            avgStyle = styles.higherStat;
        } else {
            godStyle = avgStyle = styles.statText;
        }
    
        return (
            <View style={styles.statRow}>
                <View style={styles.statColumn}><Text style={styles.statName}>{`${statName}:`}</Text></View>
                <View style={styles.statColumn}><Text style={[styles.statValue, godStyle]}>{godStat}</Text></View>
                <View style={styles.lastStatColumn}><Text style={[styles.statValue, avgStyle]}>{avgStat}</Text></View>
            </View>
        );
    };    

    const toggleStats = () => setShowStats(!showStats);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={god.Attributes.imageURL} style={styles.image} />
            <Text style={styles.name}>{god.Name}</Text>
            <View style={styles.classContainer}>
                <Ionicons name={classIcons[god.Attributes.Class]} size={20} color={theme.text} />
                <Text style={styles.class}>{god.Attributes.Class}</Text>
            </View>
            <Text style={styles.description}>{god.Attributes.Title}</Text>

            <TouchableOpacity onPress={toggleStats} style={styles.toggleButton}>
                <Text style={styles.toggleButtonText}>{showStats ? 'Hide Stats' : 'Show Stats'}</Text>
            </TouchableOpacity>
            <Picker
                selectedValue={selectedComparison}
                onValueChange={(itemValue, itemIndex) => setSelectedComparison(itemValue)}
                style={styles.picker}
            >
                {Object.keys(averageStats).map(key => (
                    <Picker.Item label={key} value={key} key={key} />
                ))}
            </Picker>
            
            {showStats && (
                <View style={styles.statsContainer}>
                    {statKeysToShow.map(statKey => {
                        const godStat = god.Attributes[statKey];
                        const avgStat = averageStats[selectedComparison][statKey] || ''; // Use a fallback empty string if undefined
                        return (
                            <View key={statKey}> {/* Add the key here */}
                                <Text>{compareStats(statKey, godStat, avgStat)}</Text>
                            </View>
                        );
                    })}
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
            width: '100%',
            backgroundColor: theme.surface,
            padding: 10,
            borderRadius: 8,
            marginTop: 10,
            borderColor: '#ddd', // Border color for the outer grid
            borderWidth: 1, // Border width for the outer grid
            overflow: 'hidden', // Ensures no overflow outside the container
        },
        statRow: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1, // Adds horizontal line after each row
            borderBottomColor: '#ddd', // Light grey line for horizontal grid
            paddingVertical: 5, // Padding top and bottom within each row
            backgroundColor: theme.surface,
        },
        statColumn: {
            flex: 1,
            alignItems: 'flex-start', // Aligns text to the left within columns
            borderRightWidth: 1, // Adds vertical line between columns
            borderRightColor: '#ddd', // Light grey line for vertical grid
            paddingHorizontal: 5, // Padding left and right within each column
        },
        lastStatColumn: {
            flex: 1,
            alignItems: 'flex-start', // Aligns text to the left within the last column
            paddingHorizontal: 5, // Padding left and right within the last column
            borderRightWidth: 0, // Ensures no border on the right edge of the last column
        },
        statName: {
            fontSize: 14,
            fontWeight: 'bold',
            color: theme.text,
            textAlign: 'left',
        },
        statValue: {
            fontSize: 14,
            color: theme.text,
            textAlign: 'left',
        },
        higherStat: {
            color: 'green',
            fontWeight: 'bold',
        },
        lowerStat: {
            color: 'red',
            fontWeight: 'bold',
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
            textAlign: 'left',
        },
        picker: {
            width: '100%',
            backgroundColor: 'white',
        },
    });
}

export default GodDetailScreen;
