// CEST UN TEST
//il faut enlever les types dans connectionS
import {useState} from 'react';
import { View, StyleSheet, Text } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/navigation";
import { recruiter, talent } from "../utils/variables";
import InputView from '../components/inputView';

const LoginScreen = () => {

    const [company, setCompany] = useState("");
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const route = useRoute<RouteProp<RouteParams>>();

    const stateSetter = {setCompany, setName, setFirstName, setEmail, setPassword};

    if (route.params?.type === recruiter) {
        return (
            <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.text}>
                    Merci de renseigner les informations ci-dessous
                </Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
                <InputView value={[company, email, password]} setter={}/>
            </View>
            {/* <View style={styles.button}>
                <StandardButton title="JE CREER MON COMPTE" onPress={() => submitConnection("talent")}
                />
            </View> */}
        </View>
        )
    } 

    if (route.params?.type === talent)
    return (
        <View style={styles.container}>

        </View>
    )

    return (
        <View style={styles.container}>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    textView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    text: {
        fontSize: 30,
    },
    errorMsg: {
        color: "red",
        justifyContent: "center",
        fontSize: 13
    },
    input: {
        flex: 2,
        justifyContent: "center",
        width: "90%",
    },
    inputStyle: {
        borderColor: "#9a9ca1",
        borderWidth: 2,
        borderRadius: 50,
        paddingBottom: 10,
        paddingTop: 10,
        marginVertical: 10,
        paddingLeft: 10
    },
    button: {
        flex: 1,
        width: "90%",
        justifyContent: "flex-end",
        alignItems: 'center'
    }
})

export default LoginScreen