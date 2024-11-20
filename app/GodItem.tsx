import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { setSelectedGod } from './selectedGod'; 
import { GodClass, Range } from './godsData';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/ThemeContext'; 

const classIcons: Record<GodClass, keyof typeof Ionicons.glyphMap> = {
    [GodClass.Assassin]: "skull-outline",
    [GodClass.Guardian]: "shield-half",
    [GodClass.Hunter]: "send",
    [GodClass.Mage]: "flame-outline",
    [GodClass.Warrior]: "eyedrop-outline",
};

interface GodItemProps {
  god: {
    name: string;
    class: GodClass;
    range: Range;
    blurb: string;
    imageUrl: any;
    abilities: any;
  };
}

const GodItem: React.FC<GodItemProps> = ({ god }) => {
    const { theme } = useTheme();

    return (
        <View style={[styles.container, { borderBottomColor: theme.secondary }]}>
            <Link 
                href="/GodDetailScreen"
                onPress={() => setSelectedGod(god)}
                style={styles.link}>
                <Image source={god.imageUrl} style={styles.image} />
            </Link>
            <Text style={[styles.name, { color: theme.text }]}>{god.name}</Text>
            <View style={styles.classContainer}>
                <Ionicons name={classIcons[god.class]} size={16} color={theme.text} />
                <Text style={[styles.class, { color: theme.text }]}>{god.class}</Text>
            </View>
            <Text style={[styles.blurb, { color: theme.text }]}>{god.blurb}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 3,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10
    },
    classContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    class: {
        fontSize: 14,
        fontStyle: 'italic',
        marginLeft: 5, // Spacing between icon and text
    },
    blurb: {
        fontSize: 14,
        textAlign: 'center',
        marginTop: 5,
    },
    link: {
        fontSize: 16,
        marginTop: 10,
    }
});

export default GodItem;