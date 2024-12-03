import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getSelectedGod } from './selectedGod';
import { useTheme } from '../theme/ThemeContext';
import averageStats from './average_god_stats.json';
import {Picker} from '@react-native-picker/picker'; 
import { Grid, Row, Cell } from './GridComponents';
import { Attributes, AverageStats } from './interfaces';
import gods from './godsDataRaw.js'

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
    const [selectedComparison, setSelectedComparison] = useState('None');

    const getStats = (key) => {
        if (key.includes("Average")) {
            return averageStats[key]; // Accessing average stats
        } else {
            const god = gods.find(g => g.Name === key);
            return god ? god.Attributes : null; // Accessing individual god's stats
        }
    };
    
    const comparisonStats = getStats(selectedComparison);
    

    if (!god) {
        return <Text>God not found.</Text>;
    }

    const styles = getStyles(theme);
    const toggleStats = () => setShowStats(!showStats);

    const statValueStyle = (godStat, comparisonStat) => {
        if (!comparisonStat) return [styles.statValue, styles.statValue]; // Handle missing data
    
        let godValue = parseFloat(godStat.split(" ")[0]);
        let comparisonValue = parseFloat(comparisonStat.split(" ")[0]);
    
        if (godValue > comparisonValue) {
            return [styles.higherStat, styles.lowerStat];
        } else if (godValue < comparisonValue) {
            return [styles.lowerStat, styles.higherStat];
        } else {
            return [styles.statValue, styles.statValue];
        }
    };    

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
            
            {showStats && (
                <>
                    <Text style={styles.statName}>Compare to:</Text>
                    <Picker
                        selectedValue={selectedComparison}
                        onValueChange={(itemValue) => setSelectedComparison(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="None" value="None" />
                        {Object.keys(averageStats).map(key => (
                            <Picker.Item label={`${key}`} value={key} key={key} />
                        ))}
                        <Picker.Item label="Gods" value="Gods" enabled={false} />
                        {gods.map(god => (
                            <Picker.Item label={god.Name} value={god.Name} key={god.Name} />
                        ))}
                    </Picker>


                    <Grid style={styles.grid}>
                        <Row key="header">
                            <Cell><Text style={styles.statName}>Stats</Text></Cell>
                            <Cell><Text style={styles.statName}>{god.Name}</Text></Cell>
                            <Cell><Text style={styles.statName}>{selectedComparison}</Text></Cell>
                        </Row>
                        {statKeysToShow.map(statKey => {
                            const godStat = god.Attributes[statKey];
                            const comparisonStat = comparisonStats ? comparisonStats[statKey] : "N/A";
                            const [godStyle, comparisonStyle] = statValueStyle(godStat, comparisonStat);
                            
                            return (
                                <Row key={statKey}>
                                    <Cell><Text style={styles.statName}>{statKey}</Text></Cell>
                                    <Cell><Text style={godStyle}>{godStat}</Text></Cell>
                                    <Cell><Text style={comparisonStyle}>{comparisonStat}</Text></Cell>
                                </Row>
                            );
                        })}
                    </Grid>
                </>
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

function getStyles(theme) {
    return StyleSheet.create({
        container: {
            alignItems: 'center',
            padding: 20,
            backgroundColor: theme.background,
        },
        image: {
            width: 200,
            height: 200,
            borderRadius: 10,
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
            backgroundColor: '#007BFF',  //blue background color for now
            borderRadius: 5,
            alignSelf: 'center',
            minWidth: 100,  // Ensuring the button has a minimum width
            justifyContent: 'center',  // Center content horizontally
            alignItems: 'center'  // Center content vertically
        },
        toggleButtonText: {
            color: 'white',  // White text for better contrast on the blue background
            fontSize: 16,
            fontWeight: 'bold',
            textAlign: 'center',
        },
        picker: {
            width: '100%',
            backgroundColor: 'white',
            maxWidth: 400
        },
        higherStat: {
            color: 'green',
            fontWeight: 'bold',
        },
        lowerStat: {
            color: 'red',
            fontWeight: 'bold',
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
    });
}

export default GodDetailScreen;