import { LinearGradient } from "expo-linear-gradient"
import { Pressable, Text, StyleSheet } from "react-native";

type ButtonProps = {
    title: string,
    onPress : () => void
}

const StandardButton = ({ title, onPress }: ButtonProps) => {
    return (
        <LinearGradient
            colors={["#0a44f2", "#6b7cb0"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.linearGradient}
        >
            <Pressable
                style={styles.pressable}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    {title}
                </Text>
            </Pressable>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: "center",
        width: "90%",
        borderRadius: 50,
        marginBottom: 10,
    },
    pressable: {
        alignItems: "center",
        shadowColor: 'black',
        shadowOpacity: 0.8,
        elevation: 6,
        width : "100%",
        borderRadius : 50,
        borderBottomWidth : 0,

    },
    text: {
        fontSize: 20,
        paddingTop: 10,
        fontWeight: "bold",
        paddingBottom: 10,
        color: "white"
    }

})

export default StandardButton;