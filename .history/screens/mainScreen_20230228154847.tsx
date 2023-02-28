import {useEffect} from "react";
import { Text, View, StyleSheet } from "react-native";
import { getItem } from "../utils/storage";

const MainScreen = () => {

    useEffect(() => {
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