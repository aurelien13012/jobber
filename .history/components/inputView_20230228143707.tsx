import { StyleSheet, Text, TextInput, View } from "react-native";
import StandardButton from "./standardButton";

type StateSetters = React.Dispatch<React.SetStateAction<string>>[];

type inputProps = {
    value: string[];
    setter: StateSetters;
    placeHolder: string[];
    secureTextEntry: boolean[];
    text: string;
    errorMsg : string;
}

const InputView = ({ value, setter, placeHolder, secureTextEntry, text, errorMsg }: inputProps) => {
    return (
        <View style={styles.textView}>
            <View style={styles.textView}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </View>
            <View style={styles.input}>
            <Text style={styles.errorMsg}>{errorMsg}</Text>
                {value.map((x, i) => (
                    <TextInput
                        placeholderTextColor="#9a9ca1"
                        value={value[i]}
                        onChangeText={setter[i]}
                        placeholder={placeHolder[i]}
                        secureTextEntry={secureTextEntry[i]}
                        style={styles.inputStyle}
                    />
                ))}
            </View>
        </View>
    )
}

{/* <View style={styles.container}>
    <View style={styles.textView}>
        <Text style={styles.text}>
            Merci de renseigner les informations ci-dessous
        </Text>
    </View>
    <View style={styles.input}>
        <Text style={styles.errorMsg}>{errorMsg}</Text>
        <InputView
            value={[name, firstName, email, password]} setter={stateSetterNewTalent} placeHolder={["Nom", "Prénom", "Email", "Mot de passe"]}
            secureTextEntry={[false, false, false, true]}
        />
    </View>
    <View style={styles.button}>
        <StandardButton title="JE CREER MON COMPTE" onPress={() => submitConnection("talent")}
        />
    </View>
</View> */}

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

export default InputView;