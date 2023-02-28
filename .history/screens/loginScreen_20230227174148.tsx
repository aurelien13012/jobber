// CEST UN TEST
//il faut enlever les types dans connectionS
import {useState} from 'react';
import { View, StyleSheet } from "react-native";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RouteParams } from "../navigation/navigation";
import { recruiter, talent } from "../utils/variables";

const LoginScreen = () => {
    const route = useRoute<RouteProp<RouteParams>>();

    if (route.params?.type === recruiter) {
        return (
            <View style={styles.container}>

            </View>
        )
    } 

    if (route.params?.type === talent)
    return (
        <View style={styles.container}>

        </View>
    )

    return (
        <View style={styles.container}>

        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    }
})

export default LoginScreen