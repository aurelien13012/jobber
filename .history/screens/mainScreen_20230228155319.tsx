import {useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { getItem } from "../utils/storage";
import jwtDecode from "jwt-decode";

const MainScreen = () => {

    useEffect(() => {
        const token = getItem("token");
        const decodedToken = jwtDecode(token);
        console.log("decodedToken", decodedToken)
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
    container : {
        flex : 1
    }
})

export default MainScreen;