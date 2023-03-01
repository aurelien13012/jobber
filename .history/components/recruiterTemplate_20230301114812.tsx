import { View, StyleSheet, Text } from "react-native";

type recruiterProps = {
    name: string,
    fonction: string,
    desc: string
}

const RecruiterTemplate = ({ name, fonction, desc }: recruiterProps) => {

    return (
        <View>
            <View style={styles.container}>
                <Text>{name}</Text>
                <Text>{fonction}</Text>
                <Text>{desc}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default RecruiterTemplate;