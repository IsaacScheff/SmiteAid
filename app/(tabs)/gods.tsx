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


// import { Text, View, StyleSheet } from 'react-native';

// export default function GodsScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Gods screen</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#25292e',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     color: '#fff',
//   },
// });