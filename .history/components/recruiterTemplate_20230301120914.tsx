import { View, StyleSheet, Text } from "react-native";

type recruiterProps = {
    name: string,
    fonction: string,
    desc: string
}

const RecruiterTemplate = ({ name, fonction, desc }: recruiterProps) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.fonction}>{fonction}</Text>
                <Text style={styles.company}>Entreprise : {name}</Text>
            </View>
                <Text style={styles.desc}>{desc}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : "center",
        marginLeft : 20,
        marginRight : 20,
        marginBottom : 70,
        marginTop : 70,
        borderWidth : 1,
        borderColor : "black",
        borderRadius : 8,
        elevation : 4,
        backgroundColor : "white",
        padding : 10
    },
    desc : {
        textAlign : "justify"
    },
    fonction : {
        fontWeight : "bold",
        fontSize : 20
    },
    company : {
        color : "#6b7cb0"
    }
});

export default RecruiterTemplate;