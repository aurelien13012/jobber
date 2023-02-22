import { Pressable, Text, StyleSheet, View } from "react-native";

type ButtonProps = {
    setIsRecruiter: React.Dispatch<React.SetStateAction<boolean>>,
    setIsLookingForJob: React.Dispatch<React.SetStateAction<boolean>>,
    isRecruiter: boolean,
    isTalent: boolean
}

const ChoiceButton = ({ setIsRecruiter, setIsLookingForJob, isRecruiter, isTalent }: ButtonProps) => {

    const recruiter = (): void => {
        setIsRecruiter(!isRecruiter);
        setIsLookingForJob(false);
    }

    const talent = (): void => {
        setIsLookingForJob(!isTalent);
        setIsRecruiter(false);
    }

    return (
        <View style={styles.choicesView}>
            <Pressable
                style={[
                    styles.pressable,
                    { borderColor: isRecruiter ? "#0a44f2" : "#9a9ca1" }
                ]}
                onPress={recruiter}
            >
                <Text style={[
                    styles.text,
                    { color: isRecruiter ? "#0a44f2" : "#9a9ca1" }
                ]}>
                    DE NOUVEAUX TALENTS
                </Text>
            </Pressable>
            <Pressable
                style={[
                    styles.pressable,
                    { borderColor: isTalent ? "#0a44f2" : "#9a9ca1" }
                ]}
                onPress={talent}
            >
                <Text style={[
                    styles.text,
                    { color: isTalent ? "#0a44f2" : "#9a9ca1" }
                ]}>
                    DE MON JOB DE REVE
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    choicesView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    pressable: {
        alignItems: "center",
        width: "90%",
        borderWidth: 2,
        borderRadius: 50,
        marginBottom: 10,
        backgroundColor: "#f2f2f2"
    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        paddingBottom: 10,
    }
})

export default ChoiceButton;