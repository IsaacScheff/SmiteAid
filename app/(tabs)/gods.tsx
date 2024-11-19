import React from 'react';
import { ScrollView } from 'react-native';
import GodItem from '../GodItem';
import gods from '../godsData';

const GodsScreen: React.FC = () => {
    return (
        <ScrollView>
            {gods.map(god => (
                <GodItem key={god.name} god={god} />
            ))}
        </ScrollView>
    );
};

export default GodsScreen;