import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Grid Component
const Grid = ({ children }) => (
    <View style={[styles.grid, styles.grid]}>
        {children}
    </View>
);

// Row Component
const Row = ({ children, isLast }) => (
    <View style={[styles.row, isLast && { borderBottomWidth: 0 }]}>
        {children}
    </View>
);

// Cell Component
const Cell = ({ children, isLast }) => (
    <View style={[styles.cell, isLast && { borderRightWidth: 0 }]}>
        <Text style={styles.text}>{children}</Text>
    </View>
);

// Styles
const styles = StyleSheet.create({
    grid: {
        width: '100%',
        flexDirection: 'column',
        borderColor: '#ddd',
        borderWidth: 1,
        borderTopWidth: 0,  // Remove top border to ensure it doesn't double up with rows
        maxWidth: 400
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    cell: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 10,
        borderRightWidth: 1,
        borderRightColor: '#ddd',
    },
    text: {
        fontSize: 14,  // Set font size for text within cells
    }
});

export { Grid, Row, Cell };