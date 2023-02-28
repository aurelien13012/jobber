import {useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { getItem } from "../utils/storage";
import jwtDecode from "jwt-decode";

const MainScreen = () => {

    useEffect(() => {
        const token = jwtDecode(getItem("token"));
        console.log("token",token) 
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