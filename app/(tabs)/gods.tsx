import React, { useState } from 'react';
import { ScrollView, TextInput, StyleSheet, View } from 'react-native';
import GodItem from '../GodItem';
import gods from '../godsData';

const GodsScreen: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query
    const [filteredGods, setFilteredGods] = useState(gods); // State for the filtered list of gods

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = gods.filter(god =>
            god.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredGods(filtered);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder="Search gods..."
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <ScrollView>
                {filteredGods.map(god => (
                    <GodItem key={god.name} god={god} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#c1d4e0'
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        margin: 1,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});

export default GodsScreen;