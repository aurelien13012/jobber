import { View, StyleSheet, Text } from "react-native";

type recruiterProps = {
    name: string,
    fonction: string,
    desc: string
}

const RecruiterTemplate = ({ name, fonction, desc }: recruiterProps) => {

    return (
        <View style={styles.container}>
                <Text>Entreprise : {name}</Text>
                <Text style={styles.fonction}>{fonction}</Text>
                <Text style={styles.desc}>{desc}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : "center",
        // alignItems : "center",
        marginLeft : 20,
        marginRight : 20,
        marginBottom : 70,
        marginTop : 70,
        borderWidth : 1,
        borderColor : "black",
        borderRadius : 8,
        elevation : 4,
        backgroundColor : "white"
    },
    desc : {
        padding : 10,
        textAlign : "justify"
    },
    fonction : {
        fontWeight : "bold"
    }
});

export default RecruiterTemplate;