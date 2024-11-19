import React, { useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { getSelectedGod } from './selectedGod'; // Adjust the path as necessary

const GodDetailScreen: React.FC = () => {
    const god = getSelectedGod();
    const [selectedAbility, setSelectedAbility] = useState<number | null>(null); // Tracks which ability is clicked

    if (!god) {
        return <Text>God not found.</Text>;
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={god.imageUrl} style={styles.image} />
            <Text style={styles.name}>{god.name}</Text>
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
    description: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
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
    },
    abilityDescription: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
        textAlign: 'center',
    },
    buffsContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f0f8ff', // Light background to differentiate buffs visually
        borderRadius: 8,
    },
    buffText: {
        fontSize: 14,
        color: '#008080', // Teal color for buffs
        marginBottom: 5,
        textAlign: 'left'
    },
});

export default GodDetailScreen;