import { StyleSheet, Text, TextInput, View } from "react-native";
import StandardButton from "./standardButton";

type StateSetters = React.Dispatch<React.SetStateAction<string>>[];

type inputProps = {
    value: string[];
    setter: StateSetters;
    placeHolder: string[];
    secureTextEntry: boolean[];
    text: string;
    errorMsg: string;
}

const ConnectionForm = ({ value, setter, placeHolder, secureTextEntry, text, errorMsg }: inputProps) => {
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
                        key={i}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        width: "90%",
        height : 100
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
        // flex: 1,
        // // justifyContent: "center",
        // width: "100%",
        // height : 100
    },
    inputStyle: {
        borderColor: "#9a9ca1",
        borderWidth: 2,
        borderRadius: 50,
        paddingBottom: 10,
        paddingTop: 10,
        marginVertical: 10,
        paddingLeft: 10
    }
})

export default ConnectionForm;