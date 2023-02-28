import { View, StyleSheet, TextInput } from "react-native";

type InputProps = {
    value: string,
    placeHolder: string,
    placeHolderTextColor: string,
    setter: React.Dispatch<React.SetStateAction<string>>
}

const input = ({ value, placeHolder, placeHolderTextColor, setter }: InputProps) => {
    return (
        <View>
            <TextInput
                style={styles.inputStyle}
                value = {value}
                placeholder = {placeHolder}
                onChangeText= {setter}
                placeholderTextColor = {placeHolderTextColor}
            />
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

export default input;