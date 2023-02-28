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
                style = {styles.inputStyle}
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

export default inputView;