import {useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { getItem } from "../utils/storage";
import jwtDecode from "jwt-decode";

const MainScreen = () => {

    useEffect(() => {
        // const test = async()=> {
        //     const token = await getItem("token");
        //     const decodedToken = jwtDecode(token);
        //     console.log("decodedToken", decodedToken)
        // }
        // test()
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