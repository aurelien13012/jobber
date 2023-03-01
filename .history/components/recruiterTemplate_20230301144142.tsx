import { View, StyleSheet, Text } from "react-native";
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';

type recruiterProps = {
    name: string,
    fonction: string,
    salary: string,
    desc: string,
    contract : string
}

const RecruiterTemplate = ({ name, fonction, desc, salary, contract }: recruiterProps) => {

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.fonction}>{fonction}</Text>
                <Text style={styles.company}>Entreprise : {name}</Text>
            </View>
            <View style={styles.salAndCt}>
                <View style={styles.salary}>
                    <FontAwesome5 name="money-bill" size={20} color="black" />
                    <Text style={styles.padSalAndCt}>{salary}</Text>
                </View>
                <View style={styles.contract}>
                    <FontAwesome name="suitcase" size={24} color="black" />
                    <Text style={styles.padSalAndCt}>{contract}</Text>
                </View>
            </View>
            <View>
                <Text style={styles.postDesc}>Descriptif du poste</Text>
                <Text style={styles.desc}>{desc}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 70,
        marginTop: 70,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 8,
        elevation: 4,
        backgroundColor: "white",
        padding: 10
    },
    desc: {
        textAlign: "justify"
    },
    fonction: {
        fontWeight: "bold",
        fontSize: 25
    },
    company: {
        color: "#6b7cb0",
        fontSize: 20
    },
    postDesc: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 15,
        paddingBottom: 10
    },
    salAndCt : {
        flex : 1,
        paddingTop : 15,
    },
    salary : {
        flexDirection : "row",
        paddingBottom : 2,
    },
    contract : {
        flexDirection : "row",
    },
    padSalAndCt : {
        paddingLeft : 10,
        alignItems : "center"
    }

});

export default RecruiterTemplate;