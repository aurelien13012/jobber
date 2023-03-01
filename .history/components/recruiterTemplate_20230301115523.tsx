import { View, StyleSheet, Text } from "react-native";

type recruiterProps = {
    name: string,
    fonction: string,
    desc: string
}

const RecruiterTemplate = ({ name, fonction, desc }: recruiterProps) => {

    return (
        <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{fonction}</Text>
                <Text>{desc}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent : "center",
        alignItems : "center"
    }
});

export default RecruiterTemplate;