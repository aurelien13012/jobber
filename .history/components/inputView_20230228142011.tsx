import { StyleSheet, TextInput, View } from "react-native";

type StateSetters = React.Dispatch<React.SetStateAction<string>>[];

type inputProps = {
    value: string[];
    setter: StateSetters;
    placeHolder: string[];
    secureTextEntry : boolean[];
}

const InputView = ({ value, setter, placeHolder, secureTextEntry }: inputProps) => {
    return (
        <View>
            {value.map((x, i ) => (
                <TextInput 
                placeholderTextColor="#9a9ca1"
                value = {value[i]}
                onChangeText={setter[i]}
                placeholder = {placeHolder[i]}
                secureTextEntry = {secureTextEntry[i]}
                style = {styles.inputStyle}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        borderColor: "#9a9ca1",
        borderWidth: 2,
        borderRadius: 50,
        paddingBottom: 10,
        paddingTop: 10,
        marginVertical: 10,
        paddingLeft: 10
    },
})

export default InputView;