import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { getItem } from "../utils/storage";
import jwt_decode from "jwt-decode";

type decodedToken = {
    name : string,

}

const MainScreen = () => {

    const [isTalent, setIsTalent] = useState(false);
    const [isRecruiter, setIsRecruiter] = useState(false);

    useEffect(() => {
            // const fetchToken = async () => {
            //     const token = await getItem("token")
            //     const decodedToken = token && jwt_decode(token);
            //     console.log("decodedToken", decodedToken)
            //     if(decodedToken?.name) {

            //     }
            // }
            // fetchToken()
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