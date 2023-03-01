
import { useEffect } from 'react';
import { StyleSheet, Image, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/navigation';
import { LinearGradient } from "expo-linear-gradient";
import { getItem } from '../utils/storage';

const LoadingScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    useEffect(() => {
        setTimeout(async () => {
            const token = await getItem("token");
            if (token) {
                navigation.navigate("MainScreen");
            } else {
                navigation.navigate("ChoiceScreen");
            }
        }, 1000)
    }, []);

    return (
        <LinearGradient
            colors={["#0a44f2", "#6b7cb0"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <Image source={require("../assets/logo.png")} style={styles.logo} />
            <Text style={styles.text}>JOBBER</Text>
        </LinearGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    logo: {
        width: "40%",
        height: "20%",
        resizeMode: "contain",
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        paddingTop: 15,
        color: "white"
    }
})

export default LoadingScreen;