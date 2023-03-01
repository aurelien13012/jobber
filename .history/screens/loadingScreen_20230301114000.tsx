
import { useEffect } from 'react';
import { StyleSheet, Image, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/navigation';
import { LinearGradient } from "expo-linear-gradient";

const LoadingScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    useEffect(() => {
        setTimeout(async () => {
            // const 
            navigation.navigate("ChoiceScreen");
        }, 1000)
    }, []);

    // useEffect(() => {
    //     const fetchToken = async () => {
    //         const token = await getItem("token");
    //         if (token) {
    //             const decodedToken: DecodedToken | null = jwt_decode(token);
    //             if (decodedToken && decodedToken.name) {
    //                 setIsTalent(true);
    //                 setIsRecruiter(false);
    //             }
    //             if (decodedToken && decodedToken.company) {
    //                 setIsRecruiter(true);
    //                 setIsTalent(false);
    //             }
    //             if (!decodedToken) {
    //                 navigation.navigate("ChoiceScreen");
    //             }
    //         }
    //     }
    //     fetchToken();
    // }, [])

    return (
        <LinearGradient
            colors={["#0a44f2", "#6b7cb0"]}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <Image source={require("../assets/logo.png")} style={styles.logo}/>
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
        width : "40%",
        height : "20%",
        resizeMode : "contain",
    },
    text: {
        fontSize : 20,
        fontWeight : "bold",
        paddingTop : 15,
        color : "white"
    }
})

export default LoadingScreen;