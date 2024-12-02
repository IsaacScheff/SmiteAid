import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { getSelectedGod } from './selectedGod';
import { useTheme } from '../theme/ThemeContext';
import averageStats from './average_god_stats.json';
import {Picker} from '@react-native-picker/picker';
import { Grid, Row, Cell } from './GridComponents';

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
    const [selectedComparison, setSelectedComparison] = useState('Average Overall');

    if (!god) {
        return <Text>God not found.</Text>;
    }

    const styles = getStyles(theme);

    const statValueStyle = (godStat, avgStat) => {
        if (godStat > avgStat) {
            return [styles.higherStat, styles.lowerStat]; // god's stat is higher
        } else if (godStat < avgStat) {
            return [styles.lowerStat, styles.higherStat]; // god's stat is lower
        }
        return [styles.statValue, styles.statValue]; // stats are equal
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

            <Picker
                selectedValue={selectedComparison}
                onValueChange={(itemValue) => setSelectedComparison(itemValue)}
                style={styles.picker}
            >
                {Object.keys(averageStats).map(key => (
                    <Picker.Item label={key} value={key} key={key} />
                ))}
            </Picker>

            <Grid style={styles.grid}>
                {statKeysToShow.map(statKey => {
                    const [godStyle, avgStyle] = statValueStyle(god.Attributes[statKey], averageStats[selectedComparison][statKey]);
                    return (
                        <Row key={statKey}>
                            <Cell><Text style={styles.statName}>{statKey}</Text></Cell>
                            <Cell><Text style={godStyle}>{god.Attributes[statKey]}</Text></Cell>
                            <Cell><Text style={avgStyle}>{averageStats[selectedComparison][statKey]}</Text></Cell>
                        </Row>
                    );
                })}
            </Grid>

            <Text style={styles.sectionTitle}>Abilities</Text>
            <View style={styles.abilitiesContainer}>
                {god.Abilities.map((ability, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.abilityItem}
                        onPress={() => setSelectedAbility(index)}
                        activeOpacity={1}
                    >
                        <Image source={ability.imageURL} style={styles.abilityImage} />
                        <Text style={styles.abilityName}>{ability.name}</Text>
                        <Text style={styles.abilityDescription}>{ability.description}</Text>
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
        picker: {
            width: '100%',
            backgroundColor: 'white',
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
    });
}

export default GodDetailScreen;
