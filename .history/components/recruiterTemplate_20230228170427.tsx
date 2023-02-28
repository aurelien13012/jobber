import { View, StyleSheet, Text } from "react-native";

const RecruiterTemplate = () => {

    const fakeData = [{
        companyName: "Vini",
        poste: "Commercial BtoB",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    }, {
        companyName: "Mon Petit Terrain",
        poste: "Développeur web",
        description: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    }, {
        companyName: "Crédit Banque",
        poste: "Chargé de clientèle",
        descritpion: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi."
    }
    ]


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