import { StyleSheet, TextInput, View } from "react-native";

type inputProps = {
    inputs: string[];
    value: string[];
    setter: React.Dispatch<React.SetStateAction<string>>;
    placeHolder: string[],
}

const inputView = ({ inputs, value, setter, placeHolder }: inputProps) => {
    return (
        <View>
            {inputs.map((i) => (
                <TextInput 
                
                />
            ))}
        </View>

    )


}

StyleSheet.create({
})

export default inputView;