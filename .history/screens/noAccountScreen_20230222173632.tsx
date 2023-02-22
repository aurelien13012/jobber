import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/navigation";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { recruiter } from '../utils/variables';
import StandardButton from '../components/standardButton';
import { handleFirstConnection } from '../utils/handleConnection';


const NoAccountScreen = () => {

    const [companyName, setCompanyName] = useState("");
    const [name, setName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const route = useRoute<RouteProp<RouteParams>>();

    const submitConnection = async (type: string) => {
        const response = await handleFirstConnection(type, { name, firstName, email, password, companyName })
        if (typeof response === "string") {
            setErrorMsg(response)
        }
    }

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
                    <TextInput
                        value={companyName}
                        onChangeText={setCompanyName}
                        placeholder="Entreprise"
                        placeholderTextColor="#9a9ca1"
                        style={styles.inputStyle}
                    />
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Email"
                        placeholderTextColor="#9a9ca1"
                        style={styles.inputStyle}

                    />
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        placeholder="Mot de passe"
                        placeholderTextColor="#9a9ca1"
                        style={styles.inputStyle}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.button}>
                    <StandardButton title="JE CREER MON COMPTE" onPress={() => submitConnection("recruiter")} />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.text}>
                    Merci de renseigner les informations ci-dessous
                </Text>
            </View>
            <View style={styles.input}>
                <Text style={styles.errorMsg}>{errorMsg}</Text>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder="Nom"
                    placeholderTextColor="#9a9ca1"
                    style={styles.inputStyle}
                />
                <TextInput
                    value={firstName}
                    onChangeText={setFirstName}
                    placeholder="Prénom"
                    placeholderTextColor="#9a9ca1"
                    style={styles.inputStyle}
                />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                    placeholderTextColor="#9a9ca1"
                    style={styles.inputStyle}
                />
                <TextInput
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Mot de passe"
                    placeholderTextColor="#9a9ca1"
                    style={styles.inputStyle}
                    secureTextEntry={true}
                />
            </View>
            <View style={styles.button}>
                <StandardButton title="JE CREER MON COMPTE" onPress={() => submitConnection("talent")}
                />
            </View>
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

export default NoAccountScreen;