import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteParams } from '../navigation/navigation';
import { getItem } from "../utils/storage";
import jwt_decode from "jwt-decode";

type DecodedToken = {
    name ?: string,
    company ? : string
}

const MainScreen = () => {

    const [isTalent, setIsTalent] = useState(false);
    const [isRecruiter, setIsRecruiter] = useState(false);

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();

    useEffect(() => {
            const fetchToken = async () => {
                const token = await getItem("token")
                // const decodedToken = token && jwt_decode(token);
                // console.log("decodedToken", decodedToken)
                if(token) {
                    const decodedToken : DecodedToken | null = jwt_decode(token);
                    if(decodedToken && decodedToken.name) {
                        setIsTalent(true);
                        setIsRecruiter(false);
                    }
                    if (decodedToken && decodedToken.company) {
                        setIsRecruiter(true);
                        setIsTalent(false);
                    }
                    if(!decodedToken) {

                    }

                }
            }
            fetchToken()
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