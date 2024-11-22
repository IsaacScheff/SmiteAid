import React, { useState } from 'react';
import { ScrollView, TextInput, StyleSheet, View } from 'react-native';
import GodItem from '../GodItem';
import gods from '../godsDataRaw';
import { useTheme } from '../../theme/ThemeContext'; 

const GodsScreen: React.FC = () => {
    const { theme } = useTheme(); 
    console.log("Current theme in GodsScreen:", theme);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [filteredGods, setFilteredGods] = useState(gods);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
        const filtered = gods.filter(god =>
            god.Name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredGods(filtered);
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <TextInput
                style={[styles.searchBar, { backgroundColor: theme.surface, color: theme.text }]}
                placeholder="Search gods..."
                placeholderTextColor={theme.text}
                value={searchQuery}
                onChangeText={handleSearch}
            />
            <ScrollView>
                {filteredGods.map(god => (
                    <GodItem key={god.Name} god={god} />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        margin: 1,
        paddingHorizontal: 10,
    },
});

export default GodsScreen;