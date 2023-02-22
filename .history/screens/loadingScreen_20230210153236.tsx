
import { useEffect } from 'react';
import { Text, View, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';

interface loadingPageProps {
    time: number,
    screen : string
};

const LoadingScreen = ({ time, screen } : loadingPageProps) => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate(screen);
        }, time)
    }, []);

    return (
        <View style={styles.container}>
            <Text>Page de chargement</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default LoadingScreen;