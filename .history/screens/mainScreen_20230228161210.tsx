import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { getItem } from "../utils/storage";
// import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode";

const MainScreen = () => {

    useEffect(() => {
        let decodedToken;
        const isToken = async () => {
            const token = await getItem("token");
            decodedToken = token && jwt_decode(token);
            console.log("decodedToken", decodedToken)
        }
        console.log("deciode", decodedToken)
        if (decodedToken) {
            console.log("on en a un")
        }
        isToken()
    }, [])

    return (
        <View>
            <Text>
                commentça va ?
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MainScreen;