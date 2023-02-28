//C EST UN TEST

import { View, StyleSheet, TextInput } from "react-native";

type InputProps = {
    value: string,
    placeHolder: string,
    placeHolderTextColor: string,
    setter : React.Dispatch<React.SetStateAction<string>>
    // setCompany: React.Dispatch<React.SetStateAction<string>>,
    // setName: React.Dispatch<React.SetStateAction<string>>,
    // setPassword: React.Dispatch<React.SetStateAction<string>>,
    // setfirstName: React.Dispatch<React.SetStateAction<string>>,
    // setEmail: React.Dispatch<React.SetStateAction<string>>
}

const inputComponent = ({ value, placeHolder, placeHolderTextColor, setter }: InputProps) => {
    return (
        <View>
            <TextInput
                style={styles.inputStyle}
                value={value}
                placeholder={placeHolder}
                placeholderTextColor={placeHolderTextColor}
                onChangeText={setter}
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

export default inputComponent;