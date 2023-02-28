import { RouteProp, useRoute } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import StandardButton from "../components/standardButton";
import { RouteParams } from "../navigation/navigation";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const ConnectionScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>();
    const route = useRoute<RouteProp<RouteParams>>();

    const newUser = (): void => {
        // route.params && navigation.navigate('NoAccountScreen', { type: route.params.type })
        // TODO ICI TEST 
        route.params && navigation.navigate('LoginScreen', { type: route.params.type })

    }

    const existingUser = (): void => {
        // route.params && navigation.navigate('AccountScreen', { type: route.params.type })
        // TODO ICI TEST 
        route.params && navigation.navigate("LoginScreen", {type : undefined })
    }


    return (
        <View style={styles.container}>
            <StandardButton title="JE CREER UN COMPTE" onPress={newUser} />
            <StandardButton title="J'AI DEJA UN COMPTE" onPress={existingUser} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    }
})

export default ConnectionScreen; 