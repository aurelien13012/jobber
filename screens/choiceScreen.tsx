import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/navigation';
import ChoiceButton from "../components/choiceButton";
import StandardButton from "../components/standardButton";
import { recruiter, talent } from "../utils/variables";

const ChoiceScreen = () => {

    const [isRecruiter, setIsRecruiter] = useState<boolean>(false);
    const [isLookingForJob, setIsLookingForJob] = useState<boolean>(false);

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    const handleConnection = () : void => {
        isRecruiter && navigation.navigate("ConnectionScreen", {type : recruiter})
        isLookingForJob && navigation.navigate("ConnectionScreen", {type : talent})
    }

    return (
        <View style={styles.container}>
            <View style={styles.textView}>
                <Text style={styles.text}>Je suis à la recherche</Text>
            </View>
            <ChoiceButton
                setIsRecruiter={setIsRecruiter} 
                setIsLookingForJob={setIsLookingForJob}
                isRecruiter =  {isRecruiter}
                isTalent = {isLookingForJob}
            />
            <View style={styles.continue}>
                <StandardButton title="CONTINUER" onPress={handleConnection}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 30,
        marginBottom: 10,
    },
    choicesView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    continue: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 10
    }
})

export default ChoiceScreen;