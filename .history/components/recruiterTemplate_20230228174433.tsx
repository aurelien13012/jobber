import { View, StyleSheet, Text } from "react-native";


type recruiterProps = {
    name : string,
    fonction : string,
    description : string 
}

const RecruiterTemplate = ({name, fonction, description} : recruiterProps) => {

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