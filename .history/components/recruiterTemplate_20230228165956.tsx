import { View, StyleSheet, Text } from "react-native";

const RecruiterTemplate = () => {

const fakeData = [{
    companyName : "Vinci"
}]



    return (
        <View style={styles.container}>
            <Text>Nom de l'entreprise</Text>
            <Text>Poste recherché</Text>
            <Text>Descriptif du poste</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default RecruiterTemplate;