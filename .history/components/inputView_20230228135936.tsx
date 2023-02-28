import { StyleSheet, TextInput, View } from "react-native";

type inputProps = {
    value: string[];
    setter: React.Dispatch<React.SetStateAction<string>>;
    placeHolder: string[],
}

const inputView = ({ value, setter, placeHolder }: inputProps) => {
    return (
        <View>
            {value.map((x, i ) => (
                <TextInput 
                placeholderTextColor="#9a9ca1"
                value = {value[i]}
                onChangeText={setter}
                placeholder = {placeHolder[i]}
                />
            ))}
        </View>

    )

//     <TextInput
//     value={company}
//     onChangeText={setCompany}
//     placeholder="Entreprise"
//     placeholderTextColor="#9a9ca1"
//     style={styles.inputStyle}
// />


}

StyleSheet.create({
})

export default inputView;