import { View, StyleSheet, Text } from "react-native";

const talentTemplate = () => {
    return (
        <View style={styles.container}>
            <Text>Nom / Prénom</Text>
            <Text>Parcours</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default talentTemplate;